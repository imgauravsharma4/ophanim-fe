import React from "react";
import aboutUsImage from "../../assests/images/aboutUs.png"
import { aboutUsData } from "../../utlis/variables";
import Card from "../../Components/Cards/Card";

const AboutPage = () => {
  return (
    <div>
      About page
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Card
              heading={aboutUsData.heading}
              content={aboutUsData.content}
              icon={aboutUsData.icon}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-wrapper">
              <img src={aboutUsImage} alt="about us" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
