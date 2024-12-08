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
      {item?.lists?.map((listItems, listsIndex) => (
        <div className='list' key={`key-${listsIndex}- ${index}`}>
          <ul>
            {listItems?.map((listItem, i) => {
              if (listItem.isHeading) {
                return (
                  <li
                    key={`lists - ${i} - ${listsIndex} - ${index}`}
                    className='justify-content-center text-center'
                  >
                    <p>{listItem.text}</p>
                  </li>
                );
              }
              return (
                <ListItem
                  item={listItem?.text}
                  index={`lists - ${index} - ${listsIndex} - ${i}`}
                  icon={listItem?.icon}
                />
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
