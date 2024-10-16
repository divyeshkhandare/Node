const mongoose = require("mongoose");
const dbconnect = async () => {
  await mongoose.connect("mongodb+srv://divyeshkhandare:todo@cluster0.h79y9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("Connected to MongoDB!");
};

module.exports = dbconnect;