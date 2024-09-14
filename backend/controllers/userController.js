const userScehma = require("../models/userModel");
const bcrypt = require("bcryptjs");

// geting data from user for signup
// post : /signup

const dummy = [
    {
        user1 : 'satish'
    } ,
    {
        user2 : 'solera'
    }
]

const emailD = [

  {
    email1 : "abc@gmail.com"
  },

  
  {
    email2: "satish@gmail.com"
  }

]
   
const signUp = (req, res) => {
  const { userName, password1, password2 } = req.body; // declared but value read nahi hui iska
  // program main vo varible add kiya

  try {
    const data = userName.toLowerCase();
    
    dummy.map( (data) =>{
        const newUser = userName;
        const isExist = dummy.includes(newUser);
        console.log(isExist)

        if(!isExist){
            const newArr = []
            newArr.push(newUser)
            console.log(newArr)
        }else{
            console.log('user is their')
        }
    })

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

const emailDe = [
  {
    email1 : 'abc@gmail.com'
  } ,

  {
    email2 : 'satish@gmail.com'
  }
]
const logIn = (req, res) => {
 
  const {email , password1 , password2 } = req.body;
  

  
  
   // includes yah only array pe chalta hai naki objects pe
    // for (const email in emailD){  // objects pe itrate karna hoto forin use karo 
    //   console.log(email)          // yeh wala iss scenerio main kaam ka nahi hai
    // }

     
    // for(const eml of emailD){    // arrays , sets , map pe yah use karo
    //   if(eml === email){
    //     console.log('yah this email is existed')
    //   }else{
    //     emailD.push({email3 : email})
      
    //   }
    // }
 

  


  // if(userEmail.includes(email)){
  //   res.write('email is exist \n');

  // }else{
  //   res.write('email is not exist \n')
  // }


  res.write("login is data \n");
  res.end()
};

module.exports = { signUp, logIn };
