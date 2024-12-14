const express = require("express");
const dbConnect = require("./config/db");
const UserRouter = require("./Routes/user.route");
const movieRouter = require("./Routes/movies.route");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the movie API");
});

app.use("/user", UserRouter);
app.use("/movie", movieRouter);

app.listen(8090, () => {
  console.log("Server is running on port 8090");
  dbConnect();
});
