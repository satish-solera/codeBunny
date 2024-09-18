const users = require("../models/userModel");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// geting data from user for signup
// post : /signup

const signUp = async (req, res) => {
  // program main vo varible add kiya
  // // checking password are simmilar or not
  // const orignlepass1 = password1;
  // const salt = 10; // salt means = adding random data

  // bcrypt.hash(orignlepass1, salt, (err, hashPass) => {
  //   if (err) throw err;
  //   res.json(hashPass);
  // });

  try {
    const { email, userName, password } = req.body;

    if (!email || !userName || !password) {
      res.status(501).json("filed are empty");
    }

    const ischeckLowerCase = email.toLowerCase();

    var data;
    if (ischeckLowerCase !== email) {
      data = email.toLowerCase();
      const isEmailExist = await users.findOne({ email: data });
      if (isEmailExist) {
        console.log("email is exist");
      }
    }

    const ischeckLower = userName.toLowerCase();

    var dataUser;
    if (ischeckLower !== userName) {
      dataUser = userName.toLowerCase();
      const isUserNameExist = await users.findOne({ userName: dataUser });
      if (isUserNameExist) {
        console.log("user is exist");
      }
    }

    if (password >= 4) {
      var hashPassword = await bcrypt.hash(password, 10);
    }

    const user = new users({
      email: data,
      userName: dataUser,
      password: hashPassword,
    });
    await user.save();

    // res.status(200).json("data is saved " + email + userName + password);
  } catch (err) {
    console.log(`error is ${err}`);
  }
};

const logIn = async (req, res) => {
  const { userName, password } = req.body;

  const data = userName;

  const newData = await users.findOne({ userName: req.body.userName });
  if (!newData) {
    console.log("user is exist");
  }

  // if(passD){
  //   console.log('pass is exist')
  // }
};

module.exports = { signUp, logIn };
