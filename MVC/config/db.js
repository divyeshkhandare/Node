const mongoose = require("mongoose");
const dbconnect = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("Connected to MongoDB!"); 
}; 

module.exports = dbconnect;
