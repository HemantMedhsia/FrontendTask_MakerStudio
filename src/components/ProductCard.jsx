import React from "react";
import "../Style/ProductCard.css";
import { Link } from "react-router-dom";

// ProductCard component renders a card for displaying product information
function ProductCard({
  id,
  image,
  title,
  price,
  addToCart,
  viewDetails,
}) {
  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart({ id, title, price });
  };

  // Function to handle viewing the details of the product
  const handleViewDetails = () => {
    viewDetails(id);
  };

  return (
    <div className="card">
      <div className="imgDiv">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        {/* Displaying product title */}
        <h3>{title}</h3>
        {/* Displaying product price */}
        <h3 className="price">${price}</h3>
        {/* Button to add product to cart */}
        <button onClick={handleAddToCart}>Add to Cart</button>
        {/* Horizontal line for visual separation */}
        <hr />
        {/* Button to view product details */}
        <button onClick={handleViewDetails} >
          <Link to={`/product?id=${id}`} className="custom-link">View Product Details</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
