const express = require('express')
const userController = require('./../controllers/userController')
const router = express.Router();
  
//http://localhost:3000/api/v1/users/5
router.param('id', (req, res, next, val)=>{
  console.log(`Tour id for user is ${val}`);
  next();
})

router
.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;