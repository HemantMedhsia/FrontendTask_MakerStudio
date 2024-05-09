// ProductDetailPage.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../Style/ProductDetailPage.css'

function ProductDetailPage() {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  useEffect(() => {
    if (id && items.length > 0) {
      const selectedProduct = items.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    }
  }, [id, items]);

  return (
    <div className="product-detail-container">
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
          <Link to='/'>Back to Home Page</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailPage;
