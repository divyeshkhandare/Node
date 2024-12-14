const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect("mongodb://localhost:27017/movies");
  console.log("Connected to MongoDB!");
};

module.exports = dbConnect;
