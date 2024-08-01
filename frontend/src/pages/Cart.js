import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, updateCartItem }) => {
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
              <h2>{item.name}</h2>
              <p className="price">${item.price}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateCartItem(item._id, parseInt(e.target.value))}
                />
              </p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
