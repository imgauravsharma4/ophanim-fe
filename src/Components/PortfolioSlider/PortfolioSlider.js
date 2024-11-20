import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slider2 from '../../assests/images/slider2.png'
import slider3 from '../../assests/images/slider3.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    url: slider2,
  },
  {
    url: slider2,
  },
  {
    url: slider3,
  },
  {
    url: slider3,
  },
 
];

const PortfolioSlider = () => {
  return (
    <div className='container'>
      <Carousel
        responsive={responsive}
        autoPlay
        swipeable
        draggable
        infinite
        keyBoardControl
        containerClass="carousel-container"
        
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl.url} alt={`slide-${index}`} className="slider-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioSlider;
