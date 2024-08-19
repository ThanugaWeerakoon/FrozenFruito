import React from "react";
import { useNavigate } from "react-router-dom";
import Pinnaple from "../../public/images/view-sliced-pineapple-fruit_23-2150325522.jpg";
import Passion from "../../public/images/jar-passion-fruit-juice-fresh-passion-fruit-cut-half-place-dark-floor.jpg";
import Avacado from "../../public/images/healthy-green-smoothie-with-avocado-kiwi-lie-table.jpg";
import Mango from "../../public/images/fresh-mango-juice-smoothie-with-mango-cubes_1174662-4637.jpg";

const Menu = () => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate("/products");
  };

  return (
    <section>
      <div className="flex items-center justify-center">
        <div></div>
        <div className="flex flex-col items-center">
          <h1 className="PT-serif text-yellow-500 text-[40px] font-semibold">
            Our Pulp Products
          </h1>
          <img
            src="https://templatekit.tokokoo.com/coffeekit/wp-content/uploads/sites/6/2020/04/divider2.png"
            alt="divider"
            className="w-[230px] h-[16px] mb-5"
          />
        </div>
        <div></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src={Pinnaple}
                  alt="Pineapple"
                />
                <button
                  onClick={handleViewProduct}
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  View Product
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Passion}
                    alt="Passion"
                  />
                  <button
                    onClick={handleViewProduct}
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    View Product
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={Mango}
                    alt="Mango"
                  />
                  <button
                    onClick={handleViewProduct}
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    View Product
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>

              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src={Avacado}
                  alt="Avocado"
                />
                <button
                  onClick={handleViewProduct}
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  View Product
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
