const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
  nameOfNews: {
    type: String,
    required: true,
  },

  dateOfNews: {
    type: String,
    required: true,
  },

  infoOfNews: {
    type : String ,
    required :true ,
    length : 20 
  },

   maangNewsName:{
          type : String ,
          required : true ,
        
  },

   maangNewsInfo: {
    type : String ,
    required : true
  }
});

module.exports = model("news", newsSchema);
