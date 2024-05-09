import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../Style/ProductDetails.css";
import { FaCartPlus } from "react-icons/fa";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function ProductDetails() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for holding all items
  const [items, setItems] = useState([]);
  // State for filtering price
  const [filterPrice, setFilterPrice] = useState(null);
  // State for holding items in the cart
  const [cart, setCart] = useState([]);
  // State for holding the total value of items in the cart
  const [cartValue, setCartValue] = useState(0);

  // Fetching products from API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  // Handler for changing the filter price
  const handleFilterChange = (event) => {
    const selectedPrice = event.target.value;
    setFilterPrice(selectedPrice);
  };

  // Handler for changing the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Add the product to the cart
    setCart([...cart, product]);
    // Update the cart value
    setCartValue(cartValue + 1);
  };

  // Filtering items based on search query and filter price
  const filteredItems = items
    .filter((item) => {
      // Filter by price
      if (!filterPrice) return true; // if no filter selected, return all items
      return item.price < parseInt(filterPrice);
    })
    .filter((item) => {
      // Filter by search query
      if (!searchQuery) return true; // if no search query, return all items
      const searchLower = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      );
    });

  return (
    <>
      {/* Filter and search input */}
      <div className="filterbutton">
        <div className="select-wrapper">
          {/* Dropdown for filtering by price */}
          <select onChange={handleFilterChange}>
            <option value="">Price All</option>
            <option value="20">Price less than 20</option>
            <option value="50">Price less than 50</option>
            <option value="100">Price less than 100</option>
          </select>
        </div>
        {/* Search input */}
        <input
          className="input"
          type="text"
          placeholder="Search by name or description"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {/* Cart button */}
        <button className="cartbutton">
          <Link
            to={`/viewCart?cart=${JSON.stringify(cart)}&cartValue=${cartValue}`}
          >
            Cart <FaCartPlus style={{ fontSize: "25px", color: "red" }} />
            <strong>{cartValue}</strong>
          </Link>
        </button>
      </div>
      {/* Rendering ProductCard components for filtered items */}
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
