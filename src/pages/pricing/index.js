import React from "react";
import { pricingDetails } from "../../utlis/variables";
import PriceCard from "../../Components/Cards/PriceCard";

const PricingPage = () => {
  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='price-header'>
              <h1>
                Web Development <br /> Plans
              </h1>
              <p>
                Choose the plan right for you <span>Let’s get started</span>
              </p>
            </div>
          </div>
          {pricingDetails.map((item, index) => (
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <PriceCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
