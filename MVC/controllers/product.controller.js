require("dotenv").config();
const Product = require("../models/product.model");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { productid } = req.params;

  try {
    const products = await Product.findById(productid);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const createProduct = async (req, res) => {
  if (req.file) {
    req.body.img = req.file.path;
  }
  try {
    let products = await Product.create(req.body);
    res.status(201).send(products);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { productid } = req.params;

  try {
    let products = await Product.findByIdAndUpdate(productid, req.body, {
      new: true,
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { productid } = req.params;

  try {
    let products = await Product.findByIdAndDelete(productid);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

module.exports = {
  getProduct,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
};
