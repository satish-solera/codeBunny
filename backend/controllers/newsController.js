const news = require ('../models/newsModel')
// showing market information 
// get : /api/news
const getNews = (req , res) =>{
    res.json('news are geted')
}

// showing maang data
// get : /api/maangdata
const maangData = (req  , res ) =>{
    res.json('ang data is showed')
}


// serching jobs data

const jobData = async (req , res) =>{
     const {name , email } = req.body;
     const isLower = name
     if(isLower){
        const newName = name.toUpperCase;
        console.log('hey everthing is okk')
     }
     res.status(404)
    
}

module.exports = {getNews , maangData , jobData};