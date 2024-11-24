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
            <div
              className={`col-xl-${12 / data.length} col-lg-${
                12 / data.length
              } col-md-6 col-sm-12 price-for-desktop`}
              key={`key-${index}`}
            >
              <PriceCard item={item} index={index} />
            </div>
          ))}
          <div className='price-for-mobile'>
            <div className='price-tabs'>
              <ul class='nav nav-tabs' id='myTab' role='tablist'>
                {data.map((item, index) => (
                  <li class='nav-item' role='presentation' key={`key-${index}`}>
                    <button
                      class={`nav-link ${index === 0 && "active"}`}
                      id={`${item.type}-tab`}
                      data-bs-toggle='tab'
                      data-bs-target={`#${item.type}-tab-pane`}
                      type='button'
                      role='tab'
                      aria-controls={`${item.type}-tab-pane`}
                      aria-selected='true'
                    >
                      {item.type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div class='tab-content' id='myTabContent'>
              {data.map((item, index) => (
                <div
                  class={`tab-pane ${index === 0 && "fade show active "}`}
                  id={`${item.type}-tab-pane`}
                  role='tabpanel'
                  aria-labelledby={`${item.typetype}-tab`}
                  tabindex='0'
                  key={`key-${index}`}
                >
                  <PriceCard item={item} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
