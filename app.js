const express = require('express')
const fs = require('fs');

const app = express();

app.use(express.json());

/* app.get('/',(req, res)=>{
  res.status(200)
  .json({
    message: "hello from the server",
    app: "Natours"
  })
})
 */



const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours
    }
  })
});



//working with params
app.get('/api/v1/tours/:id', (req, res)=>{
  console.log(req.params);

  const id = req.params.id *1; // convert into integer
  const tour = tours.find(el=>el.id ===id);

  /* if(id > tours.length) */
  if(!tours)
    {
      res.status(404)
      .json({
        status: 'fail',
        message: 'Invalid id'
      })
    }

  res.status(200)
  .json({
    status: 'success',
    data:{
      tour
    }
  })
})



app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body)

  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json)`, JSON.stringify(tours), err => {
    res.status(201) //created
      .json({
        status: 'success',
        data: {
          tour: newTour
        }
      })
  }
  );
})


app.patch('/api/v1/tours/:id', (req, res)=>{

  if(req.params.id * 1 > tours.length){
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    })
  }
  res.status(200).json({
    status: 'success',
    data:{
      tour: '<Updated tour here>'
    }
  })
})



app.delete('/api/v1/tours/:id', (req, res)=>{

  if(req.params.id * 1 > tours.length){
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    })
  }
  res.status(204).json({
    status: 'success',
    data:null
  })
})

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on ${port}`)
})