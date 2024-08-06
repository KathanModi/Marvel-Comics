import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product!', error);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product, quantity: 1 } });
  };

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <div class="button-wrapper">
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={handleBuyNow} >Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
