const express = require('express');
const fs = require('fs');
const Tour = require('./../models/tourModel');

/* const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  ); */

exports.getAllTours = async (req, res) => {
  try {
    console.log(req.query);
    //?BUILD QUERY
    // 1A. Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
    
    //1B. Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr));



    let query = await Tour.find(JSON.parse(queryStr));
    
    //EXECUTE QUERY
    const tours = await query;

    // SEND QUERY
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    console.log('getTour ignited 🔥');
    const tour = await Tour.findById(req.params.id);
    // Tour.findOne({_id:req.params.id})

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
  /* const newTour = new Tour({})
  newTour.save(); */
};

exports.updateTour = async (req, res) => {
  try {
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log('updateTour ignited 🔥');

    res.status(200).json({
      status: 'success',
      data: {
        updateTour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const deleteTour = await Tour.findByIdAndDelete(req.params.id);
    console.log('deleteTour ignited 🔥');

    res.status(200).json({
      status: 'success',
      data: {
        deleteTour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
