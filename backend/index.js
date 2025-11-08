const express = require('express');
const app = express();
const {connect} =require('mongoose');
const cors = require('cors')
const bodyParser  = require('body-parser')
const cookieParser = require('cookie-parser')
const auth = require('./middlewares/auth')
const error = require('./middlewares/error')
require('dotenv').config();


const newsRoutes = require('./routes/newsRoutes')
const codeComponetsRoutes = require ('./routes/codeComponetsRoutes')
const userRoutes = require('./routes/userRoutes')

// app.use(express.json({extended : true})) // middleware for passing data
// app.use(express.urlencoded({extended : true}))

const corsOptions = {
  origin : "http://localhost:5173",
  methods : "GET , POST , PUT , DELETE , PATCH  " ,
  Credentials : true 
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser)

// app.use(auth) // use our own custome middleware
app.use(error) // our own error midleware

// use cors for this 
app.use(cors(corsOptions))

// onlu jo newsRouter hai vaha ke sare routes is api ke through handle karenge
app.use('/api/news' , newsRoutes);

// this route for the codeComponets

app.use('/api/codec' , codeComponetsRoutes)

// creating for user signUp and signIn

app.use('/api/user' , userRoutes)







// mongodb connection

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/codeBunny';

// Your connection options
const options = {
    useNewUrlParser: true, // This used to matter, but not anymore!
    // Other options go here if needed
  };
  
  mongoose.connect(uri, options)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Connection error:', err));

app.listen(process.env.PORT , ()=>{
    console.log('server is connected')
})
