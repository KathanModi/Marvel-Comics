import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart, updateCartItem }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (productId, quantity) => {
    updateCartItem(productId, quantity);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cart.map(item => (
            <li key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p className="price">${item.price}</p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                    min="1"
                  />
                </p>
                <button onClick={() => handleRemove(item._id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;

