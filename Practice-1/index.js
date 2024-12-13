const express = require("express");
const dbConnect = require("./config/db");
const Cookies = require("cookie-parser");
require("dotenv").config();
const path = require("path");
const isLoggedIn = require("./middleware/isloggedin");
const UserRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(Cookies());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", isLoggedIn, (req, res) => {
  let { username, email, img } = req.cookies;
  res.render("index", { username, email, img });
});

app.use("/user", UserRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port", port);
  dbConnect();
});
