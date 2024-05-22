
const express = require('express');
const fs = require('fs');
const Tour = require('./../models/tourModel')


exports.checkBody = (req, res, next)=>{
  console.log("check body ignited")
  if(!req.body.name || !req.body.price){
      return res.status(400).json({
        status: 'fail',
        message: 'missing name or price'
      })
  }
  next();
}



/* const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  ); */

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    results: req.requestTime,
    /* result: tours.length,
    data: {
      tours,
    }, */
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);

 /*  const id = req.params.id * 1; // convert into integer
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  }); */
};

exports.createTour = (req, res) => {
 /*  console.log("create tour ignited 🔥")
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
  ); */
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

