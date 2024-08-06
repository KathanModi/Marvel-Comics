import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateProduct.css';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('There was an error fetching the categories!', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, category, price, description, imageUrl };
    axios.post('http://localhost:5000/products', newProduct)
      .then(() => navigate('/dashboard'))
      .catch(error => console.error('There was an error creating the product!', error));
  };

  return (
    <div className="create-product">
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select Category</option>
          {categories.map(category => (
            <option key={category._id} value={category.name}>{category.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
