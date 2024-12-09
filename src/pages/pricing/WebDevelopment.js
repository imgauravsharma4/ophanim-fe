import React from "react";
import PricingComponent from "../../Components/PricingComponent";
import { pageTitleDescription, pricingCategory } from "../../utlis/variables";
import HelmetComponent from "../../Components/HelmetComponent";

const WebDevelopment = () => {
  return (
    <>
      <HelmetComponent
        title={pageTitleDescription.WEB_PRICING.title}
        description={pageTitleDescription.WEB_PRICING.description}
      />
      <PricingComponent type={pricingCategory.WEB} />
    </>
  );
};

export default WebDevelopment;
