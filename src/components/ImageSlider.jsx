import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ImageSlider = () => {
  const images = [
    './Vitja1.jpg',
    './Vitja2.jpg',
    "./Vitja3.jpg",
    "./Vitja4.jpg",
    "./Vitja5.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    if (currentImageIndex == 0) {
        setCurrentImageIndex(images.length-1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    if(currentImageIndex == images.length - 1) {
        setCurrentImageIndex(0);
    }
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
      <img src={images[currentImageIndex]} alt="Slider" />
      <button onClick={nextImage}> <FontAwesomeIcon icon={faArrowRight} /> </button>
    </div>
  );
};

export default ImageSlider;
