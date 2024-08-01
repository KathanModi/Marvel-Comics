import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductList from './ProductList';

const Home = ({ categories, products }) => {
  return (
    <div className="home">
      <h1>Categories</h1>
      <ul className="categories">
        {categories.map(category => (
          <li key={category._id}>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
