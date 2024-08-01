import React from 'react';
import './ProductList.css';
import Product from '../components/Product';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
