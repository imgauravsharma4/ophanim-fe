import React from "react";
import Slide from "./Slide";
import LeftArrow from "../../assests/images/ArrowLeft.png";
import RightArrow from "../../assests/images/ArrowRight.png";
import { reviews } from "../../utlis/variables";
const SliderContainer = () => {
  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div
          id='carouselExampleAutoplaying'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='testimonial-header'>
                <h1>What our client says about our services.</h1>
              </div>
              <button
                className='carousel-button'
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide='prev'
              >
                <img src={LeftArrow} alt='LeftArrow' className='img-fluid' />
              </button>
              <button
                className='carousel-button'
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide='next'
              >
                <img src={RightArrow} alt='Right Arrow' className='img-fluid' />
              </button>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
              <div className='carousel-inner'>
                {reviews.map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={`key-${index}`}
                  >
                    <Slide item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
