const mongoose = require("mongoose");

const movies = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: String,
  category: String,
  actors: [{ name: String }],
  image: String,
  ratings: [
    {
      value: Number,
      min: Number,
      max: Number,
    },
  ],
  comments: [
    {
      text: String,
    },
  ],
  addedBy: String,
});

const Movies = new mongoose.model("Movies", movies);

module.exports = Movies;
