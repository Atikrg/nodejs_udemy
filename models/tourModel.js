const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim:true
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  ratingsAverage: {
    type:Number,
    default:4.5
  },
  ratingsQuantity:{
    type:Number,
    default:0
  },
  duration: {
    type: 'Number',
    required: [true, "A tour must have a duration"],

  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty:{
    type:String, 
    required: [true, 'A tour must have a difficulty']
  },
  priceDiscount: Number,
  summary:{
    type: String,
    trim: true
  },
  description:{
    type: String,
    trim: true
  },
  imageCover:{
    type:String,
    required: [true, "A tour must have a cover image"]
  },
  images:[String],
  createdAt:{
    type:Date,
    default: Date.now()
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

/* const testTour = new Tour({
  name: 'The Park Camper',
  rating: 4.7,
  price: 497,
});


testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((error) => {
    console.log(`Error 🔥: `, error);
  });
 */
