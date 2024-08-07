import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage";
import './Components/styles.css'; 
import Footer from "./Components/Footer";





function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
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
