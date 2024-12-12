const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  taskName: String,
  description: String,
  status: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
