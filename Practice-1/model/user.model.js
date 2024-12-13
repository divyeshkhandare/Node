const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  img: String,
});

const USER = mongoose.model("USER", user);

module.exports = USER;
