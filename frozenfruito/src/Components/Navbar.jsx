import React from "react";
import { Link } from "react-router-dom";
 

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="navbar--container">
        <Link to="/" className="navbar--link">Home</Link>        
        <Link to="/products" className="navbar--link">Products</Link>
        <Link to="/contact" className="navbar--link">Contact Us</Link>
      </div>
    </nav>
  );
}
