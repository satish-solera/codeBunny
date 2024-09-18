const newsModel = require("../models/newsModel");
const news = require("../models/newsModel");

// showing market information
// get : /api/news
const getNews = (req, res) => {
  const {nameOfNews , dateOfNews , infoOfNews} = req.body
  res.status(201).json(nameOfNews)

};

// showing maang data
// get : /api/maangdata
const maangData = (req, res) => {
 
};

// serching jobs data

const jobData = async (req, res) => {
  const { name, email } = req.body;

    

  

}
module.exports = { getNews, maangData, jobData };
