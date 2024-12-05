import React from "react";
import rightArrow from "../../assests/images/ArrowRight.png";

const PlansCard = ({ planName, price, features, icon }) => {
  return (
    <div className='card'>
      <div className='d-flex gap-2'>
        <img src={icon} alt='icon' className='seoplan-icon' />
        <h3>{planName}</h3>
      </div>

      <p className='price'>
        ${price} <span>/Per Month</span>
      </p>
      <p className='description'>
        Upgrade your social portfolio with a stunning profile & enhanced shots.
      </p>
      <ul className='features'>
        {features.map((feature, index) => (
          <li key={index} className={feature.disabled ? "disabled" : ""}>
            <svg
              width='22'
              height='23'
              viewBox='0 0 22 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='me-2'
            >
              <rect
                y='0.152344'
                width='22'
                height='22'
                rx='11'
                fill='#F0F5FF'
              />
              <path
                d='M15.125 8.52756L9.875 13.7773L7.25 11.1526'
                stroke='#1b5faa'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            {feature.text}
          </li>
        ))}
      </ul>
      <div>
        <button className='buy-button'>
          <span>Buy Now</span>
          <img src={rightArrow} alt='right arrow' className='img-fluid' />
        </button>
      </div>
    </div>
  );
};

export default PlansCard;
