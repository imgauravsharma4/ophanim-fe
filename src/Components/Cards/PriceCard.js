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
            if (listItem.isHeading) {
              return (
                <li key={index}>
                  <p>{listItem.text}</p>
                </li>
              );
            }
            return <ListItem item={listItem.text} index={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
