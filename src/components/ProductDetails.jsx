import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../Style/ProductDetails.css";

function ProductDetails() {
  const [items, setItems] = useState([]);
  const [filterPrice, setFilterPrice] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const handleFilterChange = (event) => {
    const selectedPrice = event.target.value;
    setFilterPrice(selectedPrice);
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
      </div>
      {filteredItems.map((item, key) => (
        <ProductCard
          key={key}
          title={item.title}
          image={item.image}
          desc={item.description}
          price={item.price}
        />
      ))}
    </>
  );
}

export default ProductDetails;
