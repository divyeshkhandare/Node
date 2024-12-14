const mongoose = require("mongoose");
const Movies = require("../Models/movie.schema");
const User = require("../Models/user.schema");

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createMovies = async (req, res) => {
  try {
    const movies = await Movies.create(req.body);
    res.status(201).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movies.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMovies = async (req, res) => {
  try {
    if (req.body.addedBy === req.body.username) {
      const { id } = req.params;
      const movie = await Movies.findByIdAndDelete(id);
      res.status(200).json({ message: "Movie deleted" });
    } else {
      res
        .status(403)
        .json({ message: "You don't have access to delete this movie" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const rating = async (req, res) => {
  
};

const filterMovies = async (req, res) => {
  const { title, addedBy, releaseDate, category } = req.query;
  try {
    let filteredMovies = {};
    if (title) {
      filteredMovies.title = title;
    }
    if (addedBy) {
      filteredMovies.addedBy = addedBy;
    }
    if (releaseDate) {
      filteredMovies.releaseDate = releaseDate;
    }
    if (category) {
      filteredMovies.category = category;
    }
    const movies = await Movies.find(filteredMovies);

    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ messege: "Movie npt found." });
  }
};

module.exports = {
  createMovies,
  updateMovies,
  deleteMovies,
  rating,
  filterMovies,
  getMovies,
};
