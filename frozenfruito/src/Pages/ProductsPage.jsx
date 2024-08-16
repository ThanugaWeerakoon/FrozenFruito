import React from "react";


export default function ProductsPage() {
    const slides = [
        {
            url: "/images/6.png", 
            title: "PASSION FRUIT PULP",
            description: "GREAT FROZEN PASSION PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, ICE-CREAMS, CAKE AND DESSERTS. MADE OUT OF CEYLON PASSION FRUITS, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. PASSION FRUIT MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, PROVIDES KEY NUTRIENTS(VITAMIN A,C,B-6), RICH IN ANTIOXIDANTS, AND ALSO IT BOOSTS THE IMMUNE SYSTEM.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
            image1: "/images/passionfruit1.jpg",
            image2: "/images/passionfruit2.jpg",
        },
        {
            url: "/images/3.jpg", 
            title: "AVOCADO PULP",
            description: "GREAT FROZEN AVOCADO PULP FROZEN(-18) IS IDEAL FOR WELCOME DRINKS, FRUIT JUICE, SAUCES, DRESSINGS, SMOOTHIES, ICE-CREAM, AND YOGHURT. MADE OUT OF CEYLON AVOCADO, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. PINEAPPLE MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, HEALTHY FOR HEART, BOOSTS SATIETY, PROTECTS YOUR EYES.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
           
        },
        {
            url: "/images/2.jpg",
            title: "PINEAPPLE PULP",
            description: "GREAT FROZEN PINEAPPLE PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, ICE-CREAMS, CAKE AND DESSERTS. MADE OUT OF CEYLON PINEAPPLES, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. PINEAPPLE MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, CONTAINS NUTRIENTS AND BENEFICIAL COMPOUNDS, LIKE VITAMIN C, MANGANESE AND ENZYMES, TO HELP AID DIGESTION, REDUCE YOUR RISK OF CANCER, BOOST IMMUNITY AND SUPPRESS INFLAMMATION.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
            
        },
        {
            url: "/images/0.png",
            title: "SOURSOP PULP",
            description: "GREAT FROZEN SOURSOP PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON SOURSOP, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. SOURSOP MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, REDUCE BLOOD SUGAR LEVELS, REDUCE INFLAMMATION, AND TO HAVE ANTIBACTERIAL PROPERTIES.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
           
        },
        {
            url: "/images/4.jpg", 
            title: "MANGO PULP",
            description: "GREAT FROZEN TCJ MANGO PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON TCJ MANGO, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. TCJ MANGO MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, AN EXCELLENT SOURCE OF DIETARY FIBRE, HAVE A HIGH CONTENT OF VITAMINS A AND C, AND ADDITIONALLY PROVIDE A GOOD AMOUNT OF MAGNESIUM AND POTASSIUM.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
            
        },
        {
            url: "/images/5.jpg", 
            title: "GUAVA PULP",
            description: "GREAT FROZEN GUAVA PULP FROZEN(-18) IS IDEAL FOR MARGARITAS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, JAMS, ICE-CREAMS AND DESSERTS. MADE OUT OF CEYLON GUAVA. NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. GUAVA MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, BENEFIT YOUR DIGESTIVE SYSTEM, AID WEIGHT LOSS, HAVE AN ANTICANCER EFFECT, HELP BOOST YOUR IMMUNITY.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
          
        },
        {
            url: "/images/7.png", 
            title: "WATERMELON PULP",
            description: "GREAT FROZEN WATERMELON PULP FROZEN(-18) IS IDEAL FOR COCKTAILS, MOCKTAILS, WELCOME DRINKS, FRUIT JUICE, SMOOTHIES, CANDIES. MADE OUT OF CEYLON WATERMELON, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. WATERMELON MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, HELPS YOU STAY HYDRATED, HAVE ANTICANCER EFFECTS, IMPROVE HEART HEALTH, AID SKIN HEALTH.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
           
        },
        {
            url: "/images/8.jpg", 
            title: "FROZEN KING COCONUT WATER",
            description: "GREAT FROZEN KING COCONUT WATER FROZEN(-18) IS IDEAL FOR MOCKTAILS, MARGARITAS, WELCOME DRINKS, FRUIT JUICES. MADE OUT OF CEYLON KING COCONUTS, NO ADDED PRESERVATIVES, SUGAR, WATER AND COLOUR. 100% NATURAL PRODUCT. KING COCONUT MAY OFFER NUMEROUS HEALTH BENEFITS SUCH AS, GIVE EXCELLENT HYDRATION FOR THE BODY, REDUCE THE RISK OF KIDNEY STONES, PROMOTES DIGESTIVE HEALTH, BOOSTS IMMUNITY.",
            details: "Available sizes: 500g, 5kg, 10kg, 25kg",
            
        },
    ];

    return (
      <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
              <h1 className="text-5xl font-extrabold text-center text-yellow-500 mb-10">Our Products</h1>
              <p className="text-center text-green-800 text-lg mb-16">
                  Discover our range of natural and healthy fruit pulps, perfect for a variety of uses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {slides.map((slide, index) => (
                      <div
                          key={index}
                          className="bg-white rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform transform duration-300 ease-in-out"
                      >
                          <img
                              src={slide.url}
                              alt={slide.title}
                              className="w-full h-56 object-cover rounded-t-lg"
                          />
                          <div className="p-6">
                              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                  {slide.title}
                              </h2>
                              <p className="text-gray-700 mb-4">
                                  {slide.description}
                              </p>
                              <p className="text-gray-800 font-semibold mb-2">
                                  {slide.details}
                              </p>
                              {slide.image1 && (
                                  <img
                                      src={slide.image1}
                                      alt={`${slide.title} 1`}
                                      className="w-full h-32 mt-4 object-cover rounded-lg"
                                  />
                              )}
                              {slide.image2 && (
                                  <img
                                      src={slide.image2}
                                      alt={`${slide.title} 2`}
                                      className="w-full h-32 mt-4 object-cover rounded-lg"
                                  />
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          
      </div>
      
  );
}
