import React from "react";
import Avatar from '../../assests/images/Avatar.png'
const Slide = () => {
  return (
    <div className='carousel-slide'>
      <div className='icons'></div>
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
    </div>
  );
};

export default Slide;
