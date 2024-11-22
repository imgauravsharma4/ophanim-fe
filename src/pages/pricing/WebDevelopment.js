import React from "react";
import PricingComponent from "../../Components/PricingComponent";
import { pricingCategory } from "../../utlis/variables";

const WebDevelopment = () => {
  return <PricingComponent type={pricingCategory.WEB} />;
};

export default WebDevelopment;
