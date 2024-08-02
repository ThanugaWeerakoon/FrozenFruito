import React from "react";
import Homepage from "./Pages/Homepage";
import './styles.css';
import { ImageSlider } from "./Components/ImageSlider";

function App() {

  const slides = [
    { url: "/slider1.jpg", title: "fruits" }, // Assuming slider1.jpg is in the public directory
    { url: "/slider2.jpg", title: "vegetables" }, // Ensure these images exist in the public directory
    { url: "/slider3.jpg", title: "grains" }
  ];

  const containerStyles = {
    width: "700px",
    height: "400px",
    margin: "0 auto"
  };
  
  return (
    <div>
      <Homepage />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
