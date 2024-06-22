import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import '../Style/Display.css';

function Display({ name }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Turn off loading after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="maindiv">
      <div className="login">
        <div className="abc">Ftask</div>
        <div className="abc inner">
          <div className="prof"></div>
          <div className="name">{name}</div>
        </div>
      </div>
      {loading ? (
        <div className="skeleton">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      ) : (
        <ProductDetails />
      )}
    </div>
  );
}

export default Display;
