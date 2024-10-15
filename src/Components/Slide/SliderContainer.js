import React from "react";
import Slide from "./Slide";
import LeftArrow from "../../assests/images/ArrowLeft.png";
import RightArrow from "../../assests/images/ArrowRight.png";
const SliderContainer = () => {
  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div id='carouselExample' className='carousel slide'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='testimonial-header'>
                <h1>What our client says about our services.</h1>
              </div>
              <button
                className='carousel-button'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='prev'
              >
                <img src={LeftArrow} alt='LeftArrow' className='img-fluid' />
              </button>
              <button
                className='carousel-button'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='next'
              >
                <img src={RightArrow} alt='Right Arrow' className='img-fluid' />
              </button>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <Slide />
                </div>
                <div className='carousel-item'>
                  <Slide />
                </div>
                <div className='carousel-item'>
                  <Slide />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
