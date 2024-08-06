const Category = require('../models/Category');
const mongoose = require('mongoose');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    if (req.body.name != null) {
      category.name = req.body.name;
    }

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteCategory = async (req, res) => {
  try {
    console.log(`Attempting to delete category with ID: ${req.params.id}`);

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log('Invalid category ID');
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const category = await Category.findById(req.params.id);
    if (!category) {
      console.log('Category not found');
      return res.status(404).json({ message: 'Category not found' });
    }

    await Category.deleteOne({ _id: req.params.id });
    console.log('Category deleted successfully');
    res.json({ message: 'Category deleted' });
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
