const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');
const verifyAdminJWT = require('../middleware/authenticateAdminToken');



route.get('/users',verifyAdminJWT, userController.getAllUsers);

// route.get('/users',verifyAdminJWT, (req,res)=>{
//     console.log("kkkkkkkk")
// });




module.exports = route;