import React, { useState } from 'react'

export const ImageSlider = ({slides}) => {
    const [ currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
      height: "100%",
      position: "relative",
    }

    const slideStyles = {
        width:'100%',
        height:'100%',
        borderRadius:"10px",
        backgroundSize:"cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    
    const leftArrowStyles = {
      position:'absolute',
      top:'50%',
      transform:'translate(0, -50%)',
      left:"32px",
      fontSize: "45px",
      color:"#fff",
      zindex:1,
      cursor: "pointer",
    };

    const rightArrowStyles = {
      position:'absolute',
      top:'50%',
      transform:'translate(0, -50%)',
      right:"32px",
      fontSize: "45px",
      color:"#fff",
      zindex:1,
      cursor: "pointer",
    };


  const goToPrevious(){
    
  }  

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>🡸</div>
      <div style={rightArrowStyles}>🡺</div>
      <div style={slideStyles}></div>
    </div>
  )
}
