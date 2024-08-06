import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './checkout.css';

const Checkout = ({ cart }) => {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({ name: '', email: '', address: '' });
  const [checkoutCart, setCheckoutCart] = useState([]);

  useEffect(() => {
    if (location.state) {
      const { product, quantity } = location.state;
      setCheckoutCart([{ ...product, quantity }]);
    } else {
      setCheckoutCart(cart);
    }
  }, [location.state, cart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info:', userInfo);
    console.log('Cart:', checkoutCart);
    alert('Order placed successfully!');
  };

  const calculateTotal = () => {
    return checkoutCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={userInfo.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userInfo.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <textarea name="address" value={userInfo.address} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {checkoutCart.map(item => (
          <div key={item._id}>
            <p>{item.name} - {item.quantity} x ${item.price}</p>
          </div>
        ))}
        <h4>Total: ${calculateTotal()}</h4>
      </div>
    </div>
  );
};

export default Checkout;
