// ProductCard.js
import React from 'react';
import '../Style/ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ id, image, desc, title, price, addToCart, viewDetails }) {
  const handleAddToCart = () => {
    addToCart({ id, title, price });
  };
 
  const handleViewDetails = () => {
    viewDetails(id);
  };

  return (
    <div className="card">
      <div className="imgDiv">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <h3 className="price">${price}</h3>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <hr />
        <hr />
        <button onClick={handleViewDetails}><Link to='/product'>View Product Details</Link></button>
      </div>
    </div>
  );
}

export default ProductCard;
