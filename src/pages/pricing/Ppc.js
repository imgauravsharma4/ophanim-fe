import React from "react";
import PricingComponent from "../../Components/PricingComponent";
import { pricingCategory } from "../../utlis/variables";

const Ppc = () => {
  return <PricingComponent type={pricingCategory.PPC} />;
};

export default Ppc;
