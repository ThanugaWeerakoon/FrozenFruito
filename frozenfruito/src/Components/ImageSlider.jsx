import React, { useState } from 'react';


export const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div>
            <div className='slider-container'>
                <div className="slider">
                    <div className="left-arrow" onClick={goToPrevious}>🡸</div>
                    <div className="right-arrow" onClick={goToNext}>🡺</div>
                    <div className="slide" style={slideStyles}></div>
                    <div className='dots-container'>
                        {slides.map((slide, slideIndex) => (
                            <div className='dots' key={slideIndex} onClick={() => goToSlide(slideIndex)}>•</div>
                        ))}
                    </div>
                </div>
            </div>   
            <div className="title">{slides[currentIndex].title}</div>     
            <div className="description">{slides[currentIndex].description}</div>     
            <div className="details">{slides[currentIndex].details}</div>     
        
        </div>
    );
};
