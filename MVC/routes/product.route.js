const { Router } = require("express");
const {
  getProduct,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const uploads = require("../utils/upload");

const productRoute = Router();
productRoute.get("/", getProduct);

productRoute.get("/:productid", getProductById);

productRoute.patch("/:productid", updateProduct);

productRoute.post("/", uploads.single("image") ,createProduct);

productRoute.delete("/:productid", deleteProduct);

module.exports = productRoute;
