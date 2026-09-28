import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage({ products, addToCart }) {
  // get the product id from the route URL
  const { productId } = useParams();

  // find the matching product from the product list
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="product-details-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>

      <button type="button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetailsPage;
