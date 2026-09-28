// CartPage.jsx: Import the CartItem component and render the shopping cart from App.jsx
import React from 'react';
import CartItem from '../assets/components/CartItem';

function CartPage({ products, removeFromCart }) {
  const cartTotal = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="page-content cart-section">
      <div className="section-heading">
        <p className="eyebrow">Your Bag</p>
        <h1>Your Cart</h1>
      </div>

      {products.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {products.map((item, index) => (
              <CartItem key={`${item.id}-${index}`} item={item} onRemove={removeFromCart} />
            ))}
          </div>
          <div className="cart-total">
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;
