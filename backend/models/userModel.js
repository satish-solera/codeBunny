const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    length: 20,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    lenght: 10,
  },
});

module.exports = model("users", userSchema);
