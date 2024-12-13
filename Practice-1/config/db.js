const mongoose = require('mongoose');


const dbConnect = async ()=>{
  await mongoose.connect(process.env.DB_URL);
  console.log('Connected to MongoDB!');
}

module.exports = dbConnect;