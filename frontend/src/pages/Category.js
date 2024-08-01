import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductList from './ProductList';
import './Category.css';

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/products?category=${categoryName}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, [categoryName]);

  return (
    <div className="category">
      <h1>{categoryName}</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Category;
