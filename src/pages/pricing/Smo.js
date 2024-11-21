import React from "react";
import PricingComponent from "../../Components/PricingComponent";
import { pricingCategory } from "../../utlis/variables";

const Smo = () => {
  return <PricingComponent type={pricingCategory.SMO} />;
};

export default Smo;
