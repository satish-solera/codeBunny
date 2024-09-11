const express = require('express');
const app = express();
const {connect} =require('mongoose');

require('dotenv').config();


const newsRoutes = require('./routes/newsRoutes')
const maangData = require ('./routes/newsRoutes')

app.use(express.json()) // middleware for passing data

// onlu jo newsRouter hai vaha ke sare routes is api ke through handle karenge
app.use('/api/news' , newsRoutes);







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