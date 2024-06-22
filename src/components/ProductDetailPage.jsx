import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/ProductDetailPage.css";

function ProductDetailPage() {
  // State to hold all items
  const [items, setItems] = useState([]);
  // State to hold the selected product
  const [product, setProduct] = useState(null);
  // Accessing the current location
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // Getting the ID from the query parameters
  const id = params.get("id");

  // Fetching products from API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  // Effect to set the selected product when ID and items are available
  useEffect(() => {
    if (id && items.length > 0) {
      // Finding the selected product based on ID
      const selectedProduct = items.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    }
  }, [id, items]);

  return (
    <div className="product-detail-container">
      {/* Rendering product details if product is available, otherwise show loading */}
      {product ? (
        <div className="product-detail">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          {/* Link to navigate back to Home Page */}
          <Link to="/Display">Back to Home Page</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailPage;
