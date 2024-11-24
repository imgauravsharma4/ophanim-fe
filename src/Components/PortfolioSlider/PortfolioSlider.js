import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider2 from "../../assests/images/slider2.png";
import slider3 from "../../assests/images/slider3.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CustomLeft = ({ onClick }) => (
  <button className='arrowButton left' onClick={onClick}>
    <FiArrowLeft />
  </button>
);
const CustomRight = ({ onClick }) => (
  <button className='arrowButton right' onClick={onClick}>
    <FiArrowRight />
  </button>
);

const PortfolioSlider = () => {
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

  return (
    <Carousel
      customLeftArrow={<CustomLeft />}
      customRightArrow={<CustomRight />}
      autoPlay
      autoPlaySpeed={2000}
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
    >
      {sliderImageUrl.map((imageUrl, index) => (
        <div
          key={index}
          className='relative rounded-lg shadow-md overflow-hidden'
        >
          <img
            src={imageUrl.url}
            alt={`slide-${index}`}
            className='img-fluid'
          />
        </div>
      ))}
    </Carousel>
  );
};

export default PortfolioSlider;
