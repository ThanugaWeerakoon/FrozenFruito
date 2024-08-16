import { useState, useEffect } from "react";
import Image0 from "../../public/images/0.png";
import Image1 from "../../public/images/1.jpg";
import Image2 from "../../public/images/2.jpg";
import Image3 from "../../public/images/3.jpg";
import Image4 from "../../public/images/4.jpg";
import Image5 from "../../public/images/5.jpg";
import Pulp from "../../public/images/9471315-removebg-preview.png";
import Pulp2 from "../../public/images/1_45_-removebg-preview.png";
import Pulp3 from "../../public/images/avocado-is-being-sprayed-with-green-liquid_1293074-13970-removebg-preview.png";
import Pulp4 from "../../public/images/vector-ripe-yellow-orange-red-whole-sliced-mango-cubes-with-leaf-isolated-white-background.png";
import Pulp5 from "../../public/images/ripe-pear-side-view-wooden-grey-wall.png";
import { Contact } from "../Components/Contact";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";


export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: Image1, title: "PASSION PULP" },
    { url: Image2, title: "PINEAPPLE PULP" },
    { url: Image3, title: "AVACADO PULP" },
    { url: Image4, title: "MANGO PULP" },
    { url: Image5, title: "GUAVA PULP" },
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
    <div className="relative w-full h-screen">
      {/* Carousel wrapper */}
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
              <h2 className="text-white text-9xl font-bold  text-center px-6 py- rounded-md transform transition-transform duration-500 ease-in-out hover:scale-105">
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
      <section className="mt-24">
          <div className="ingre">
            <div className="flex items-center justify-center">
              <div></div>
              <div className="flex flex-col items-center">
                <h1 className="PT-serif text-yellow-500 text-[40px] font-semibold">
                  Our Awsome Pulp
                </h1>
                <img
                  src="https://templatekit.tokokoo.com/coffeekit/wp-content/uploads/sites/6/2020/04/divider2.png"
                  alt="divider"
                  className="w-[230px] h-[16px] mb-5"
                />
              </div>
              <div></div>
            </div>
            <div className="flex items-center justify-center pt-[40px] pb-[120px] gap-[100px]">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center p-[10px]">
                  <img
                    src={Pulp3}
                    alt="Avacodo"
                    className="w-[280px] h-[200px] "
                  />
                  <h3 className="karla text-[23px] text-[#6ec1e4] font-semibold">
                    Avacodo
                  </h3>
                </div>
                <div className="flex flex-col items-center p-[10px]">
                  <img
                    src={Pulp2}
                    alt="pinnaple"
                    className="w-[280px] h-[240px]"
                  />
                  <h3 className="karla text-[23px] text-[#6ec1e4] font-semibold">
                    Pinnaple
                  </h3>
                </div>
              </div>
              <div>
                <img
                  src={Pulp}
                  alt="Coffee Cup"
                  className="w-[460px] h-[515px]"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center p-[10px]">
                  <img
                    src={Pulp4}
                    alt="Cacao"
                    className="w-[260px] h-[210px]"
                  />
                  <h3 className="karla text-[23px] text-[#6ec1e4] font-semibold">
                    Mango
                  </h3>
                </div>
                <div className="flex flex-col items-center p-[10px]">
                  <img
                    src={Pulp5}
                    alt="Guava"
                    className="w-[250px] h-[240px]"
                  />
                  <h3 className="karla text-[23px] text-[#6ec1e4] font-semibold">
                    Guava
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Menu/>
      <Contact/>
      <Footer/>
    </div>
  );
}
