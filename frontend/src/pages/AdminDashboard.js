import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') {
      navigate('/admin-login');
    }

    // Fetch products and categories
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error fetching the products!', error));

    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('There was an error fetching the categories!', error));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin-login');
  };

  const deleteProduct = (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
    axios.delete(`http://localhost:5000/products/${productId}`)
      .then(() => {
        console.log(`Product with ID: ${productId} deleted successfully`);
        setProducts(products.filter(product => product._id !== productId));
      })
      .catch(error => console.error('There was an error deleting the product!', error));
  };

  const deleteCategory = (categoryId) => {
    console.log(`Deleting category with ID: ${categoryId}`);
    axios.delete(`http://localhost:5000/categories/${categoryId}`)
      .then(() => {
        console.log(`Category with ID: ${categoryId} deleted successfully`);
        setCategories(categories.filter(category => category._id !== categoryId));
      })
      .catch(error => console.error('There was an error deleting the category!', error));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="admin-content">
        <h2>Products</h2>
        <button onClick={() => navigate('/create-product')}>Add Product</button>
        <ul>
          {products.map(product => (
            <li key={product._id}>
              {product.name} - {product.category} - ${product.price}
              <button onClick={() => navigate(`/edit-product/${product._id}`)}>Edit</button>
              <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <h2>Categories</h2>
        <button onClick={() => navigate('/create-category')}>Add Category</button>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              {category.name}
              <button onClick={() => navigate(`/edit-category/${category._id}`)}>Edit</button>
              <button onClick={() => deleteCategory(category._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
