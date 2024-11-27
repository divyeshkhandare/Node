const { Router } = require("express");
const {
  getProduct,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = Router();
router.get("/", getProduct);

router.get("/:productid", getProductById);

router.patch("/:productid", updateProduct);

router.post("/", createProduct);

router.delete("/:productid", deleteProduct);

module.exports = router;
