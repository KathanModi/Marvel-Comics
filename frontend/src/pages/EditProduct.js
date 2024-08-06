import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditProduct.css';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: ''
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('There was an error fetching the product!', error));

    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('There was an error fetching the categories!', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/products/${id}`, product)
      .then(() => navigate('/dashboard'))
      .catch(error => console.error('There was an error updating the product!', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  return (
    <div className="edit-product">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Category</option>
          {categories.map(category => (
            <option key={category._id} value={category.name}>{category.name}</option>
          ))}
        </select>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
