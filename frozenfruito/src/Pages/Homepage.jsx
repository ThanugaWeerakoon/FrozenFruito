import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { WelcomeSlide } from "../Components/WelcomeSlide";



export default function Homepage(){

    const slides = [

        { url: "/images/6.png", 
          title: "PASSION FRUIT PULP",     
        },

        { url: "/images/1.png", 
          title: "AVACADO PULP",
        
         }, 
    
        { url: "/images/2.png",
          title: "PINEAPPLE PULP",
          
         }, 
    
        { url: "/images/3.png",
          title: "SOURSOP PULP",
          
        },
          
    
        { url: "/images/4.png", 
          title: "MANGO PULP",
          
        },
        
    
        { url: "/images/5.png", 
          title: "GUAVA PULP",
         
        },
        

        { url: "/images/7.png", 
          title: "WATERMELON PULP",
          
        },
        
    
        { url: "/images/8.jpg", 
          title: "FROZEN KING COCONUT WATER",
          
        },
        
      ];

    return(
        <div>            
            <div>
                <WelcomeSlide slides={slides} />
            </div>
            <div className="welcome-text">
                <h1>Welcome to Great Frozen!</h1>
            </div>
        </div>    

    )
}




