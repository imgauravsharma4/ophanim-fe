import React from "react";
import { options } from "../../utlis/config";
import ListItem from "../ListItem/ListItem";

const PriceCard = ({ item, index }) => {
  return (
    <div className='price-wrapper' key={index}>
      <div className={`price-card ${item.type}`}>
        <div className='head'>
          <h2>{item.type}</h2>
          <p>{item.tagline}</p>
        </div>
        <div className='price'>
          <h4>{item.price}</h4>
          <p>
            / <br /> Month
          </p>
        </div>
        <div className='cta'>
          {item.type === options.PricingCategory.SILVER ? (
            <button className='silver'>Get Started {">"}</button>
          ) : (
            <button className='primary-button register-btn'>Buy Now</button>
          )}
        </div>
      </div>
      <div className='list'>
        <ul>
          {item.lists.map((listItem, index) => {
            if (item.type === options.PricingCategory.SILVER && index === 3) {
              return (
                <li key={index}>
                  <p>{item.packageLine}</p>
                </li>
              );
            } else if (
              item.type === options.PricingCategory.GOLD &&
              index === 4
            ) {
              return (
                <li key={index}>
                  <p>{item.packageLine}</p>
                </li>
              );
            } else if (
              item.type === options.PricingCategory.PREMIUM &&
              index === 5
            ) {
              return (
                <li key={index}>
                  <p>{item.packageLine}</p>
                </li>
              );
            }
            return <ListItem key={index} item={listItem} index={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
