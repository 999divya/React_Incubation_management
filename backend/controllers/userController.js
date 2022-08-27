const { validationResult } = require("express-validator");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

  const { name, email, mobile, password, isAdmin } = req.body;

 console.log("reqbody", req.body);
  //validate user input
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({
  //     errors: errors.array(),
  //   });
  // }

  //validate if user already exists
  const duplicate = await User.findOne({ email: email });

  if (!duplicate) {
    const createUser = await User.create({
      name,
      email,
      mobile,
      password,
      isAdmin,
    });
    return res.status(201).json({ message: "Account created", name, isAdmin});
  } else {
    return res.status(200).json({
      errors: [
        {
          email: duplicate.email,
          msg: "The user already exists",
        },
      ],
    });
  }
};







exports.login = async (req, res) => {
  const { email, password } = req.body;

  //check for user in the database
  const foundUser = await User.findOne({ email: email }).exec();
  if (!foundUser) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid credentials",
        },
      ],
    });
  }

  //comparing the entered password with the saved password
  const isMatch = await bcrypt.compare(password, foundUser.password);

  if (!isMatch) {
    return res.status(401).json({
      errors: [
        {
          msg: "Email or password is invalid",
        },
      ],
    });
  } else {
    if (!foundUser.isAdmin) {
      const authToken = jwt.sign(
        {
          email: foundUser.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      console.log(authToken);

      const isAdmin = false;
      res.json({ success: `User successfully logged in`,isAdmin:false, authToken });
    } else {
      const authAdminToken = jwt.sign(
        {
          email: foundUser.email,
        },
        process.env.JWT_ADMIN_SECRET,
        { expiresIn: "1d" }
      );
      const isAdmin = foundUser.isAdmin;
      console.log("theauthAdminTokenisthis fromusercontroller"+authAdminToken);
      res.json({ success: `Admin successfully logged in`, isAdmin:true,  authAdminToken });
    }
  }
};

exports.getAllUsers = async (req, res) => {
  console.log("kkkkkkkkkk");
  const allUsers = await User.find();

  if (allUsers) {
    console.log(allUsers);
    res.status(200).json({ message: "success", allUsers });
  } else {
    res.status(400);
  }
};
