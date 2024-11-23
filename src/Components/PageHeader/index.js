import React from "react";

const PageHeader = ({ title, subTitle, tagline, buttonText, classes }) => {
  return (
    <div className={`page-heading ${classes}`}>
      <h1>
        {title}
        {subTitle && <br />}
        {subTitle && <span className='highlight-text'>{subTitle}</span>}
      </h1>
      {tagline && <p>{tagline}</p>}
      {buttonText && <button className='cta-button'>{buttonText}</button>}
    </div>
  );
};

export default PageHeader;
