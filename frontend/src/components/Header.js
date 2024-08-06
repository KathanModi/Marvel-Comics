import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>      <div className="admin-login-container">
          <Link to="/admin-login" className="admin-login-button">Admin Login</Link></div></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
