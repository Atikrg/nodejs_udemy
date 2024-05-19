
const express = require('express');
const fs = require('fs');

const router = express.Router();



exports.checkID = (req, res, next, val)=>{
  console.log(`Tour id for tour is ${val}`);
    
    if(req.params.id * 1 > tours.length)
        {
            return res.status(404).json({
                status: 'fail',
                message: 'Invalid ID'
            });
        }
        next();
};


const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    results: req.requestTime,
    result: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
 

  const id = req.params.id * 1; // convert into integer
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json)`,
    JSON.stringify(tours),
    (err) => {
      res
        .status(201) //created
        .json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
    }
  );
};

exports.updateTour = (req, res) => {
  
  
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
