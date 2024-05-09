import React from "react";
import "../Style/Navbar.css";

// Navbar component renders a navigation bar
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        {/* List items for navigation */}
        <div className="li-div">
          <li>Home</li>
        </div>
        <div className="li-div">
          <li>Product</li>
        </div>
        <div className="li-div">
          <li>Fashion</li>
        </div>
        <div className="li-div">
          <li>Services</li>
        </div>
        <div className="li-div">
          <li>Contact</li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
