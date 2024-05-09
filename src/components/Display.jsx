import React from "react";
import ProductDetails from "./ProductDetails";
import "../Style/Display.css";

// Display component renders the main content area, which includes product details
function Display() {
  return (
    <div className="maindiv">
      {/* Rendering the ProductDetails component */}
      <ProductDetails />
    </div>
  );
}

export default Display;
