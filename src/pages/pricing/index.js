import React from "react";
import { pricingDetails } from "../../utlis/variables";
import ListItem from "../../Components/ListItem/ListItem";
import { options } from "../../utlis/config";

const PricingPage = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {pricingDetails.map((item) => (
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div className='price-card'>
                <div className='heading'>
                  <h4>{item.type}</h4>
                  <p>{item.tagline}</p>
                </div>
                <div className='price'>{item.price}</div>
                <div className='cta'>
                  {item.type === options.PricingCategory.SILVER ? (
                    "Get Started "
                  ) : (
                    <button className='primary-button'>Buy Now</button>
                  )}
                </div>
              </div>

              <div className='list'>
                <ul>
                  {item.lists.map((item, index) => (
                    <ListItem item={item} index={index} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
