import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--container">
        <Link to="/" className="navbar--link">Home</Link>
        <Link to="/contact" className="navbar--link">Contact Us</Link>
        <Link to="/products" className="navbar--link">Products</Link>
      </div>
    </nav>
  );
}
