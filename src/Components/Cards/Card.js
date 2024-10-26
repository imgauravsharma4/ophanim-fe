import React from "react";

const Card = ({ icon, heading, content, content2, classes, tags }) => {
  return (
    <div className={`card-wrapper ${classes}`}>
      {icon && (
        <div className='icon'>
          <img src={icon} alt='icon' className='img-fluid' />
        </div>
      )}
      <div className='heading'>
        <h4>{heading}</h4>
      </div>
      <div className='content'>
        <p>{content}</p>
        {content2 && <p>{content2}</p>}
      </div>
      {tags && (
        <div className='tags'>
          {tags.split(",").map((item, index) => (
            <span>{item}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
