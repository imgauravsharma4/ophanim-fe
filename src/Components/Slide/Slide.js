import React from "react";
import Avatar from "../../assests/images/Avatar.png";
import Quotes from "../../assests/images/Quotes.png";
import { FaStar } from "react-icons/fa";
const Slide = ({ item }) => {
  return (
    <div className='carousel-slide'>
      <div className='icons'>
        {Array(5)
          .fill()
          .map((_, index) => (
            <FaStar key={index} />
          ))}
      </div>
      <div className='content'>{item.review}</div>
      <div className='user'>
        <img src={item.image || Avatar} alt='Avatar' className='img-fluid' />
        <div className='name'>
          <p>{item.name}</p>
          <span>{item.company}</span>
        </div>
      </div>
      <div className='logo'>
        <img src={Quotes} alt='Quotes' className='img-fluid' />
      </div>
    </div>
  );
};

export default Slide;
