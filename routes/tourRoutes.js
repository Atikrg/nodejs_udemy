const express = require('express');
const fs = require('fs');
const tourController = require('./../controllers/tourController');
const router = express.Router();

//create a check body middlware
//Check if body contains the name and price property
//If not, send back 400 (bad request)
//Add it to the post handler stack




router.param('id', (req, res, next, val)=>{
  console.log(`Tour id for user is ${val}`);
  next();
}) 

router.param('id', tourController.checkID); 

router
.route('/')
.get(tourController.getAllTours)
.post(tourController.checkBody,tourController.createTour);

router
.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = router;