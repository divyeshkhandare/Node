const express = require("express");
const dbconnect = require("./config/db");
const productRoute = require("./routes/product.route");
const path = require("path");
require("dotenv").config();

const Products = express();

Products.use(express.json());
Products.use(express.urlencoded({ extended: true }));
Products.use("/upload", express.static(path.join(__dirname, "upload")));

Products.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view/form.html"));
});
Products.use("/product", productRoute);

const PORT = process.env.PORT || 6090;

Products.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbconnect();
});
