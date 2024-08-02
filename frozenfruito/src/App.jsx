import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage";


import './styles.css';
import { ImageSlider } from "./Components/ImageSlider";

function App() {
  const slides = [
    { url: "/slider1.jpg", title: "fruits" }, 
    { url: "/slider2.jpg", title: "vegetables" }, 
    { url: "/slider3.jpg", title: "grains" }
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  };
  
  return (
    <Router>
      <div>
        <Navbar />
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/products" element={<ProductsPage />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
