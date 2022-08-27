const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController')

const { check, validationResult } = require("express-validator");



route.post('/',userController.register);

// [
//     check("email","Invalid email").isEmail(),
//     check("password","Password must be atleast 6 chars long").isLength({
//         min:6,
//     }),
// ],


route.post('/login',[
    check("email","Invalid email").isEmail(),
    check("password","Password must be atleast 6 chars long").isLength({
        min:6,
    }),
],userController.login);








module.exports = route;