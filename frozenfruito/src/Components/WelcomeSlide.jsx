import React, { useState, useEffect } from 'react';

export const WelcomeSlide = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const gradients = [
        'linear-gradient(to right, rgba(247, 325, 0, 0.8), rgba(0, 0, 0, 0))',
        'linear-gradient(to right, rgba(222, 255, 91, 0.8), rgba(0, 0, 0, 0))',
        'linear-gradient(to right, rgba(255, 230, 112, 0.8), rgba(0, 0, 0, 0))',
        'linear-gradient(to right, rgba(28, 150, 37, 0.8), rgba(0, 0, 0, 0))',
        'linear-gradient(to right, rgba(243, 202, 13, 0.8), rgba(0, 0, 0, 0))',
        'linear-gradient(to right, rgba(162, 243, 145, 0.8), rgba(0, 0, 0, 0))',
        'linear-gradient(to right, rgba(255, 45, 0, 0.8), rgba(0, 0, 0, 0))',
        'linear-gradient(to right, rgba(255, 146, 0, 0.8), rgba(0, 0, 0, 0))',

    ];

    const titleColors = [
        '#ff8500', 
        '#74ae02', 
        '#be8909', 
        '#589a07', 
        '#ffa600', 
        '#3dab03', 
        '#bd0606', 
        '#ba6f02', 
    ];


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [slides.length]);

    return (
        <div className='welcome-container'>
            <div 
                className="gradient-background" 
                style={{ backgroundImage: gradients[currentIndex] }}
            />
            <div className="welcome-slider">
            <div className="welcome-slide">
    <img src={slides[currentIndex].url} alt="slide image" />
</div>
                <div className='select-container'>
                    {slides.map((slide, slideIndex) => (
                        <div className='select' key={slideIndex} onClick={() => goToSlide(slideIndex)}>-</div>
                    ))}
                </div>
            </div>
            <div 
                className="welcome-title" 
                style={{ color: titleColors[currentIndex] }}
            >
                {slides[currentIndex].title}
            </div>
        </div>
    );
};
