const users = require("../models/userModel");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// geting data from user for signup
// post : /signup





const signUp = async (req, res, next) => {
  const { email, userName, password } = req.body;

  try {

    if (!email   || !password) {
      res.status(501).json("filed are empty");
    }

    const isEmailExist = await users.findOne({ email });
    if (isEmailExist) {
      res.json("email is exist");
    }

    const isUserNameExist = await users.findOne({ userName });
    if (isUserNameExist) {
      res.json("userName is taken by another ");
    }

    if (password >= 4) {
      var hashPassword = await bcrypt.hash(password, 10);
    }
    
    const user = new users({ email, userName, password: hashPassword });
    await user.save();
    
    const payload = {
      user: {
        id: user.id,
      },
    };
    
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '7 days' },
      (err, token) => {
        if (err) throw err;
        console.log(token)
      }
    );
    
    res.status(200).json("data is saved " + email + userName + password);
  } catch (err) {
    next({
      status: 201,
      message: "hey this error for signup",
    });
  }
};

const logIn = async (req, res) => {
  const { userName, password } = req.body;

  const newUserName = await users.findOne({ userName });
  if (!newUserName) {
    res.json("user not found");
  }

  const isMatch = await bcrypt.compare(password, newUserName.password);
  if (!isMatch) {
    console.log("pass is incoreect");
  }
  const token = generateAccessToken({ userName: userName });
  console.log("token is" + token + "\n");
  res.status(200).json('user login sucess fully')
};

module.exports = { signUp, logIn };
