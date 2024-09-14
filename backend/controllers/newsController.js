const news = require("../models/newsModel");

// showing market information
// get : /api/news
const getNews = (req, res) => {
  const {nameOfNews , dateOfNews , infoOfNews} = req.body
  res.write(`name of email is ${nameOfNews} \n`)
  res.write(`date of news is ${dateOfNews} \n`)
  res.write(`info of news is ${infoOfNews} \n`)
  res.end()

};

// showing maang data
// get : /api/maangdata
const maangData = (req, res) => {
  const {maangNewsName , maangNewsInfo } = req.body
  res.write(`name of news is ${maangNewsName} \n`)
  res.write(`maang news info is ${maangNewsInfo} \n`)
  res.end()
};

// serching jobs data

const jobData = async (req, res) => {
  const { name, email } = req.body;
  //  res.json(email)
  //  const newName = name ;
  //  const emailData= email;

  const isLower = name.toLowerCase();
  const isEmail = email.toLowerCase();
  try {
    if (isLower) {
      const newName = name.toUpperCase();
      await res.json(newName);
    }

    if (isEmail) {
      res.write(" /n email is existed");
    }
  } catch (error) {
    res.json(error);
  }

  res.status(200).json("your data is sended"); // 201 is use for 'ok' status
};

module.exports = { getNews, maangData, jobData };
