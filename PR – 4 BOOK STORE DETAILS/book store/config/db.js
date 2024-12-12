const mongoose = require("mongoose");
const dbconnect = async () => {
  await mongoose.connect("mongodb+srv://divyeshkhandare:WCIYeB5zUKWmkOeE@cluster0.0gh62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("Connected to MongoDB!");
};

module.exports = dbconnect;
