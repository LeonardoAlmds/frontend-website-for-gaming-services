import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Banner = ({ interval = 3000 }) => {
  const images = [
    './assets/fortnite_2.png',
    './assets/vava_2.png',
    './assets/minecraft_2.png'
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Limpar o intervalo ao desmontar o componente
  }, [images.length, interval]);

  return (
    <div className="image-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Banner;
