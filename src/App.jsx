import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage";
import './Components/styles.css'; 
import Loader from "./Components/LoaderComp"; // Assuming you have a loader component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Function to check if all images are loaded
  const allImagesLoaded = () => {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount += 1;
      } else {
        img.onload = () => {
          loadedCount += 1;
          if (loadedCount === totalImages) {
            setIsLoading(false);
          }
        };
        img.onerror = () => {
          // Handle error in image loading
          loadedCount += 1;
          if (loadedCount === totalImages) {
            setIsLoading(false);
          }
        };
      }
    });

    // If no images are present or all are already loaded
    if (totalImages === 0 || loadedCount === totalImages) {
      setIsLoading(false);
    }
  };

  // useEffect to call the image loading check when the app first loads
  useEffect(() => {
    allImagesLoaded();
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          <Loader />  // Show loader while images are loading
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
