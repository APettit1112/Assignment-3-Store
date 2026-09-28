// ProductsPage.jsx: Import the ProductCard component and render all the products from App.jsx
import React from 'react';
import ProductCard from '../assets/components/ProductCard';

function ProductsPage({ products, addToCart }) {
  return (
    <section className="page-content">
      <div className="section-heading">
        <p className="eyebrow">Shop All</p>
        <h1>Products</h1>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
