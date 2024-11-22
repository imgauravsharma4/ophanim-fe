import React from "react";
import rightArrow from "../../assests/images/ArrowRight.png";

const PlansCard = ({ planName, price, features, isHighlighted, icon }) => {
  return (
    <div className={`card ${isHighlighted ? "highlight" : ""}`}>
      <div className="d-flex gap-2">
        <img src={icon} alt="icon" className="seoplan-icon" />
        <h3>{planName}</h3>
      </div>

      <p className="price">
        ${price} <span>/Per Month</span>
      </p>
      <p className="description">
        Upgrade your social portfolio with a stunning profile & enhanced shots.
      </p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index} className={feature.disabled ? "disabled" : ""}>
            <img src={feature.icon} alt="icon" className="img-fluid" />
            {feature.text}
          </li>
        ))}
      </ul>
      <div>
      <button className="buy-button">
        <span>Buy Now</span>
        <img src={rightArrow} alt="right arrow" className="img-fluid" />
      </button>
      </div>
    </div>
  );
};

export default PlansCard;
