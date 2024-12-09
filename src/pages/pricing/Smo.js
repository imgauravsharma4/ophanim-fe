import React from "react";
import PricingComponent from "../../Components/PricingComponent";
import { pageTitleDescription, pricingCategory } from "../../utlis/variables";
import HelmetComponent from "../../Components/HelmetComponent";

const Smo = () => {
  return (
    <>
      <HelmetComponent
        title={pageTitleDescription.SMO_PRICING.title}
        description={pageTitleDescription.SMO_PRICING.description}
      />
      <PricingComponent type={pricingCategory.SMO} />;
    </>
  );
};

export default Smo;
