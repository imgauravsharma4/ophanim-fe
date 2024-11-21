import React from "react";
import { pricingCategory, pricingDetails } from "../../utlis/variables";
import PriceCard from "../Cards/PriceCard";

const PricingComponent = ({ type }) => {
  const data = pricingDetails[type] ?? [];
  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='price-header'>
              {type === pricingCategory.WEB ? (
                <h1>
                  Web Development <br /> Plans
                </h1>
              ) : (
                <h1>{type} Plan</h1>
              )}

              <p>
                Choose the plan right for you <span>Let’s get started</span>
              </p>
            </div>
          </div>
          {data.map((item, index) => (
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <PriceCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
