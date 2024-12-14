const {Router}= require("express")
const {createMovies , updateMovies, deleteMovies, rating, filterMovies, getMovies} = require("../controllers/movies.controller")

const movieRouter = Router()

movieRouter.post("/create", createMovies)
movieRouter.patch("/update/:id", updateMovies)
movieRouter.patch("/rating/:id", rating)
movieRouter.delete("/delete/:id",  deleteMovies)
movieRouter.get("/filter", filterMovies)
movieRouter.get("/movies", getMovies)
module.exports = movieRouter