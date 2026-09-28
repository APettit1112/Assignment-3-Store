import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, name, price, image, description, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>
      <p>{description}</p>

      <div className="product-card-actions">
        {/* link to the selected product details page */}
        <Link to={`/products/${id}`} className="product-link-button">
          View Details
        </Link>

        {/* add this product to the shopping cart */}
        <button
          type="button"
          onClick={() => onAddToCart({ id, name, price, image, description })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;