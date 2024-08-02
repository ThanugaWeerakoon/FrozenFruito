import React, { useState } from 'react';

export const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,  // Fixed from zindex to zIndex
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,  // Fixed from zindex to zIndex
        cursor: "pointer",
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>🡸</div>
            <div style={rightArrowStyles} onClick={goToNext}>🡺</div>
            <div style={slideStyles}></div>
        </div>
    );
};
