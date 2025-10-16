import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const slides = [
  {
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'TRADITIONAL & HYGIENE',
    title: 'For the love of delicious food',
  },
  {
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'DELIGHTFUL EXPERIENCE',
    title: 'Flavors Inspired by the Seasons',
  },
  {
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'AMAZING & DELICIOUS',
    title: 'Where every flavor tells a story',
  }
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovering) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          ),
        5000 // Change slide every 5 seconds
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovering]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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

  return (
    <div
      id="herosection-home-slider-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="herosection-home-arrow herosection-home-left-arrow" onClick={goToPrevious}>
        <span>&#10094;</span>
      </div>
      <div className="herosection-home-arrow herosection-home-right-arrow" onClick={goToNext}>
        <span>&#10095;</span>
      </div>
      
      <div className="herosection-home-slides-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="herosection-home-slide"
          >
             <div className="herosection-home-slide-bg" style={{ backgroundImage: `url(${slide.image})` }}></div>
          </div>
        ))}
      </div>

      <div className="herosection-home-overlay"></div>

      {/* This key forces the text container to re-render and re-animate on slide change */}
      <div key={currentIndex} className="herosection-home-text-container">
          <p className="herosection-home-subtitle">{slides[currentIndex].subtitle}</p>
          <h1 className="herosection-home-title">{slides[currentIndex].title}</h1>
      </div>

      <div className="herosection-home-dots-container">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`herosection-home-dot ${currentIndex === slideIndex ? 'herosection-home-active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;