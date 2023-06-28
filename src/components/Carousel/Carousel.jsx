import React, { useRef } from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.scss';

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel">
      <button className="nav-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="carousel-wrapper" ref={carouselRef}>
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </div>
      <button className="nav-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
