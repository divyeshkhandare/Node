const express = require("express");
const dbconnect = require("./config/db");
const router = require("./routes/product.route");

const Products = express();

Products.use(express.json());

Products.use("/products", router);

const PORT = process.env.PORT || 6090;

Products.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbconnect();
});
