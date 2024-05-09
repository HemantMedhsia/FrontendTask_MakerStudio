// ProductDetailPage.js
import React from "react";

function ProductDetailPage({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.desc}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetailPage;
