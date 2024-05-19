const express = require('express');
const fs = require('fs');
const tourController = require('./../controllers/tourController');
const router = express.Router();
/* 
router.param('id', tourController.checkID); */


router.param('id', (req, res, next, val)=>{
  console.log(`Tour id for user is ${val}`);
  next();
})

router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createTour);

router
.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = router;