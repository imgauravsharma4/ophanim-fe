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

      <ul class='nav nav-tabs' id='myTab' role='tablist'>
        <li class='nav-item' role='presentation'>
          <button
            class='nav-link active'
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home-tab-pane'
            type='button'
            role='tab'
            aria-controls='home-tab-pane'
            aria-selected='true'
          >
            Home
          </button>
        </li>
        <li class='nav-item' role='presentation'>
          <button
            class='nav-link'
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile-tab-pane'
            type='button'
            role='tab'
            aria-controls='profile-tab-pane'
            aria-selected='false'
          >
            Profile
          </button>
        </li>
        <li class='nav-item' role='presentation'>
          <button
            class='nav-link'
            id='contact-tab'
            data-bs-toggle='tab'
            data-bs-target='#contact-tab-pane'
            type='button'
            role='tab'
            aria-controls='contact-tab-pane'
            aria-selected='false'
          >
            Contact
          </button>
        </li>
      </ul>
      <div class='tab-content' id='myTabContent'>
        <div
          class='tab-pane fade show active'
          id='home-tab-pane'
          role='tabpanel'
          aria-labelledby='home-tab'
          tabindex='0'
        >
          ...
        </div>
        <div
          class='tab-pane fade'
          id='profile-tab-pane'
          role='tabpanel'
          aria-labelledby='profile-tab'
          tabindex='0'
        >
          ...
        </div>
        <div
          class='tab-pane fade'
          id='contact-tab-pane'
          role='tabpanel'
          aria-labelledby='contact-tab'
          tabindex='0'
        >
          ...
        </div>
        <div
          class='tab-pane fade'
          id='disabled-tab-pane'
          role='tabpanel'
          aria-labelledby='disabled-tab'
          tabindex='0'
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
