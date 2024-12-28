import React from "react";
import ServicePages from "../../Components/ServicePages";
import { servicesCategory } from "../../utlis/variables";

const ContentMarketing = () => {
  return <ServicePages type={servicesCategory.CONTENT_MARKETING}/>;
};

export default ContentMarketing;
