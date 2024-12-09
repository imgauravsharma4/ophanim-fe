import React from "react";
import PricingComponent from "../../Components/PricingComponent";
import { pageTitleDescription, pricingCategory } from "../../utlis/variables";
import HelmetComponent from "../../Components/HelmetComponent";

const Seo = () => {
  return (
    <>
      <HelmetComponent
        title={pageTitleDescription.SEO_PRICING.title}
        description={pageTitleDescription.SEO_PRICING.description}
      />
      <PricingComponent type={pricingCategory.SEO} />
    </>
  );
};

export default Seo;
