const express = require('express');
const app = express();
const {connect} =require('mongoose');
require('dotenv').config();



connect(process.env.MONGO_URI).then( app.listen(5000 , ()=>{`server is strated on port ${process.env.PORT}`})).catch( (e)=> `error is ${e}`)

app.get( '/' , (req , res)=>{
    res.send('home page with satish')
})



