const userScehma = require("../models/userModel");
const bcrypt = require("bcryptjs");

// geting data from user for signup
// post : /signup

const signUp = (req, res) => {
  const { userName, password1, password2 } = req.body; // declared but value read nahi hui iska
  // program main vo varible add kiya

  try {
    const data = userName.toLowerCase();
    if (data) {
      const newName = userName.toUpperCase();
      res.write(newName + "\n");
    }
    res.write(data + "\n");
    res.write(password1 + "\n");
    res.write(password2 + "\n");

    // checking password are simmilar or not
    const orignlepass1 = password1;
    const salt = 10; // salt means = adding random data

    bcrypt.hash(orignlepass1, salt, (err, hashPass) => {
      if (err) throw err;
      res.json(hashPass);
    });

    // if(password1.length && password2.length >= 8){
    //     if(password1 !== password2){
    //         res.write('password not matched \n')
    //     }else{
    //         res.write('password is mathced \n')
    //     }
    // }else{
    //     res.write('password length is small')
    // }

    if (password1.length != 8) {
      res.write("pass1 is small \n");
    } else if (password2.length != 8) {
      res.write("pass2 is small \n");
    }else{
        res.write('your pass is samll \n')
    }

    if (password1 !== password2) {
      res.write("password not matched \n");
    } else {
      res.write("password is mathced \n");
    }

    res.end();
  } catch (err) {
    res.json(err);
  }
};

const logIn = (req, res) => {
  res.send("login is data");
};

module.exports = { signUp, logIn };
