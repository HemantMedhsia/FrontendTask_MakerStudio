import React from "react";
import { useLocation } from "react-router-dom";
import "../Style/ViewCart.css";
import { Link } from "react-router-dom";

function ViewCart() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cart = params.get("cart");
  const cartValue = params.get("cartValue");

  let parsedCart;
  try {
    parsedCart = JSON.parse(cart);
  } catch (error) {
    // Handle JSON parsing error
    console.error("Error parsing cart data:", error);
    parsedCart = [];
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md box">
      <h2 className="text-2xl font-bold mb-4">View Cart</h2>
      {parsedCart.length > 0 ? (
        <div>
          {parsedCart.map((item, index) => (
            <div
              key={index}
              className="mb-4 border p-4 rounded-lg box boxColor"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">Price: {item.price}</p>
            </div>
          ))}
          <p className="text-gray-700">Cart Value: {cartValue}</p>
        </div>
      ) : (
        <p className="text-gray-700">Your cart is empty.</p>
      )}
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}

export default ViewCart;
