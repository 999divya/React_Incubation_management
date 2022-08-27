const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');
const verifyJWT = require('../middleware/authenticateToken');
const companyController = require('../controllers/companyController');

route.post('/form',verifyJWT,companyController.submitTheForm);
// route.post('/form',verifyJWT,(req,res)=>{
//     console.log("kkkikikikikiiik");
// });


module.exports = route;