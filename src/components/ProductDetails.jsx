import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../Style/ProductDetails.css";
import { FaCartPlus } from "react-icons/fa";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function ProductDetails() {
  const [items, setItems] = useState([]);
  const [filterPrice, setFilterPrice] = useState(null);
  const [cart, setCart] = useState([]); // State to hold the cart items
  const [cartValue, setCartValue] = useState(0); // State to hold the cart value

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const handleFilterChange = (event) => {
    const selectedPrice = event.target.value;
    setFilterPrice(selectedPrice);
  };

  const addToCart = (product) => {
    // Add the product to the cart
    console.log(product);
    setCart([...cart, product]);
    // Update the cart value
    console.log(cart);
    setCartValue(cartValue + 1);
  };

  const filteredItems = items.filter((item) => {
    if (!filterPrice) return true; // if no filter selected, return all items
    return item.price < parseInt(filterPrice);
  });

  return (
    <>
      <div className="filterbutton">
        <div className="select-wrapper">
          <select onChange={handleFilterChange}>
            <option value="">Price All</option>
            <option value="20">Price less than 20</option>
            <option value="50">Price less than 50</option>
            <option value="100">Price less than 100</option>
          </select>
        </div>
        {/* Render the cart button with the cart value */}
        <button className="cartbutton">
          <Link
            to={`/viewCart?cart=${JSON.stringify(cart)}&cartValue=${cartValue}`}
          >
            Cart <FaCartPlus style={{ fontSize: "25px", color: "red" }} />
            <strong>{cartValue}</strong>
          </Link>
        </button>
      </div>
      {/* Map through filtered items and render ProductCard components */}
      {filteredItems.map((item, key) => (
        <ProductCard
          key={key}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          addToCart={addToCart}
        />
      ))}
    </>
  );
}

export default ProductDetails;
