const news = require("../models/newsModel");
// showing market information
// get : /api/news
const getNews = (req, res) => {
  res.json("news are geted");
};

// showing maang data
// get : /api/maangdata
const maangData = (req, res) => {
  res.json("ang data is showed");
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
