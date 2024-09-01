import { useState, useEffect } from "react";
import Image0 from "../../public/images/0.png";
import Image1 from "../../public/images/1.jpg";
import Image2 from "../../public/images/2.jpg";
import Image3 from "../../public/images/3.jpg";
import Image4 from "../../public/images/4.jpg";
import Image5 from "../../public/images/5.jpg";

export default function ClothingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: Image1, title: "Stylish Jacket" },
    { url: Image2, title: "Elegant Dress" },
    { url: Image3, title: "Casual T-Shirt" },
    { url: Image4, title: "Classic Jeans" },
    { url: Image5, title: "Trendy Sneakers" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative ">

      <div className="relative h-[93vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.url}
              className="block w-full h-full object-cover"
              alt={slide.title}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold text-center px-6 py- rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
        {/* Slider indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-8 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-200"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        aria-label="Previous slide"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent">
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        aria-label="Next slide"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent">
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
