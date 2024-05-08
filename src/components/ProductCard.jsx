import React from 'react'
import '../Style/ProductCard.css'

function ProductCard({ image, desc, title, price }) {
    return (
        <div className="card">
          <div className="imgDiv">
            <img src={image} alt={title} />
          </div>
          <div className="card-content">
            <h3>{title}</h3>
            {/* <p>{desc}</p> */}
            <h3 className="price">${price}</h3>
            <button>Add to Cart</button>
            <hr></hr>
            <hr></hr>
            <button>View Product Details</button>
          </div>
        </div>
      );
}

export default ProductCard