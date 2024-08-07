import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ImageSlider } from "../Components/ImageSlider";



export default function Homepage(){

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

    return(
        <div>            
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <div className="welcome-text">
                <h1>Welcome to Great Frozen</h1>
            </div>
        </div>    

    )
}




