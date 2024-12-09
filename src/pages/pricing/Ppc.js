import React from "react";
import PricingComponent from "../../Components/PricingComponent";
import { pageTitleDescription, pricingCategory } from "../../utlis/variables";
import HelmetComponent from "../../Components/HelmetComponent";

const Ppc = () => {
  return (
    <>
      <HelmetComponent
        title={pageTitleDescription.PPC_PRICING.title}
        description={pageTitleDescription.PPC_PRICING.description}
      />
      <PricingComponent type={pricingCategory.PPC} />;
    </>
  );
};

export default Ppc;
