import React from "react";
import Avatar from "../../assests/images/Avatar.png";
import Quotes from "../../assests/images/Quotes.png";
import { FaStar } from "react-icons/fa";
const Slide = () => {
  return (
    <div className='carousel-slide'>
      <div className='icons'>
        {Array(5)
          .fill()
          .map((_, index) => (
            <FaStar key={index} />
          ))}
      </div>
      <div className='content'>
        Mixed feelings but adequate results. Pros: technical skills & Intuition
        about colors, fonts, & layout styles. Cons: Communication, English,
        Detail Orientation, Creativity, Following the Brief (Style guide, sample
        website, text requested). Off the mark 2 day delivery, and 5-days of
        revision for one landing (good) page.
      </div>
      <div className='user'>
        <img src={Avatar} alt='Avatar' className='img-fluid' />
        <div className='name'>
          <p>Arlene McCoy</p>
          <span>Golio</span>
        </div>
      </div>
      <div className='logo'>
        <img src={Quotes} alt='Quotes' className='img-fluid' />
      </div>
    </div>
  );
};

export default Slide;
