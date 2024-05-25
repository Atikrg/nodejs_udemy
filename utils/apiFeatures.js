class APIFeatures {
    constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
    }
  
    filter() {
      // 1A. Filtering
      const queryObj = { ...this.queryString };
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach((el) => delete queryObj[el]);
      
      //1B. Advanced Filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      console.log("filter ignite 🔥")
      this.query = this.query.find(JSON.parse(queryStr));
  
      return this;
      /* 
          let query = Tour.find(JSON.parse(queryStr)); */
    }
  
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        console.log(sortBy);
        this.query = this.query.sort(sortBy);
      } else {
        this.query = this.query.sort('-createdAt');
      }
  
      return this;
    }
  
    limitFields() {
      if (this.queryString.fields) {
        const fields = this.queryString.fields.split(',').join(' ');
        this.query = this.query.select(fields);
      } else {
        this.query = this.query.select('-__v'); // - excluding
      }
      return this;
    }
    paginate() {
      console.log('Paginate ignited 🔥');
      const page = this.queryString.page * 1 || 1;
      const limit = this.queryString.limit * 1 || 100;
      const skip = (page - 1) * limit;
  
      //page=2&limit=10, 1-10 -> page 1, 11-20 -> page2
      this.query = this.query.skip(skip).limit(limit);
      /*   query = query.skip(2).limit(10); */
  
      /*  if (this.queryString.page) {
        const numTours = await Tour.countDocuments(); //returns a promise
  
        if (skip >= numTours) throw new Error(`This Page does not exist`);
         */
  
      /*  } */
  
      return this;
    }
  }

module.exports = APIFeatures;