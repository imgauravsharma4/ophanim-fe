import React from 'react'
import PricingComponent from '../../Components/PricingComponent';
import { pricingCategory } from '../../utlis/variables';

const Seo = () => {
  return <PricingComponent type={pricingCategory.SEO} />;
}

export default Seo
