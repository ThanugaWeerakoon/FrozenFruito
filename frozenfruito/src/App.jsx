import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage";
import './Components/styles.css';  


import { ImageSlider } from "./Components/ImageSlider";

function App() {
  const slides = [
    { url: "/images/1.png", 
      title: "avacado",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
     }, 

    { url: "/images/2.png",
      title: "pineapple",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
     }, 

    { url: "/images/3.png",
      title: "soursop",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
    },
      

    { url: "/images/4.png", 
      title: "mango",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
    },
    

    { url: "/images/5.png", 
      title: "guava",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
    },
    

    { url: "/images/6.png", 
      title: "passionfruit",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
    },
    

    { url: "/images/7.png", 
      title: "watermelon",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
    },
    

    { url: "/images/8.jpg", 
      title: "kingcoconut",
      description:'GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT.'
    },
    
  ];

  const containerStyles = {
    width: "700px",
    height: "400px",
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
