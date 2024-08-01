import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img src={product.imageUrl} alt={product.name} />
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <div className="overlay">
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
