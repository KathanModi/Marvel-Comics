import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import Cart from './pages/Cart';
import axios from 'axios';
import './App.css';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import CreateProduct from './pages/CreateProduct';
import CreateCategory from './pages/CreateCategory';
import EditProduct from './pages/EditProduct';
import EditCategory from './pages/EditCategory';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });

    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  const updateCartItem = (productId, quantity) => {
    setCart(cart.map(item =>
      item._id === productId ? { ...item, quantity } : item
    ));
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home categories={categories} products={products} />} />
          <Route path="/products" element={<ProductList products={products} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateCartItem={updateCartItem} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} /> 
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/edit-category/:id" element={<EditCategory />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
