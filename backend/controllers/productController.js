const Product = require('../models/Product');
const mongoose = require('mongoose');

const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (req.body.name != null) {
      product.name = req.body.name;
    }
    if (req.body.category != null) {
      product.category = req.body.category;
    }
    if (req.body.price != null) {
      product.price = req.body.price;
    }
    if (req.body.description != null) {
      product.description = req.body.description;
    }
    if (req.body.imageUrl != null) {
      product.imageUrl = req.body.imageUrl;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    console.log(`Attempting to delete product with ID: ${req.params.id}`);

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log('Invalid product ID');
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('Product not found');
      return res.status(404).json({ message: 'Product not found' });
    }

    await Product.deleteOne({ _id: req.params.id });
    console.log('Product deleted successfully');
    res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
