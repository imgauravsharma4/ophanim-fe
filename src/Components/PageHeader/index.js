import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, subTitle, tagline, buttonText, classes }) => {
  const router = useNavigate();
  const handleClick = () => {
    router("/contact");
  };
  return (
    <div className={`page-heading ${classes}`}>
      <div className='container'>
        <h1>
          {title}
          {subTitle && <br />}
          {subTitle && <span className='highlight-text'>{subTitle}</span>}
        </h1>
        {tagline && <p>{tagline}</p>}
        {buttonText && (
          <button className='cta-button' onClick={handleClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
