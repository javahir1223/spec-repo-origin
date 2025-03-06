const ShopProduct = require('../models/ShopProduct');

const getProducts = async (req, res) => {
  const products = await ShopProduct.find();
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await ShopProduct.findById(req.params.id);
  res.json(product);
};

const createProduct = async (req, res) => {
  const newProduct = new ShopProduct(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const updatedProduct = await ShopProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  await ShopProduct.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
