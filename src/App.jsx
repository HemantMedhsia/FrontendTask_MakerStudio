import React from "react";
import Navbar from "./components/Navbar";
import ViewCart from "./components/ViewCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import ProductDetailPage from "./components/ProductDetailPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Display />} />
          <Route path='/viewCart' element={<ViewCart />} />
          <Route path='/product' element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
