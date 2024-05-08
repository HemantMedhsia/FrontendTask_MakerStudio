import React from 'react'
import '../Style/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <div className='li-div'><li>Home</li></div>
                <div className='li-div'><li>Product</li></div>
                <div className='li-div'><li>Fashion</li></div>
                <div className='li-div'><li>Services</li></div>
                <div className='li-div'><li>Services</li></div>
                <div className='li-div'><li>Contact</li></div>
            </ul>
        </div>
    )
}

export default Navbar