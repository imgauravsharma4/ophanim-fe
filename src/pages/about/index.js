import React from "react";
import aboutUsImage from "../../assests/images/aboutUs.png";
import iconLens from "../../assests/images/icon-lens.svg";
import { aboutUsData } from "../../utlis/variables";
import Card from "../../Components/Cards/Card";
import SliderContainer from "../../Components/Slide/SliderContainer";


const AboutPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Card
              heading={aboutUsData.heading}
              content={aboutUsData.content}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-wrapper">
              <img src={aboutUsImage} alt="about us" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-xl-12 ">
              <img src={iconLens} alt="Mission Icon" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <h2 className="display-4">Our Mission</h2>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <p>
                Our objective at Ophanim is to offer our clients unparalleled
                digital success. Due to our extensive experience, we are adept
                at providing the highest quality digital marketing services,
                which include the services of our exceptional industry
                professionals. We are committed to enhancing the visibility of
                your website by providing the highest quality SEO services,
                enabling your business to distinguish itself from the
                competition.
              </p>
              <p>
                Ophanim is the premier digital marketing service provider
                company that enables you to dominate the web. Our team of
                professionals employ a personalized approach with each client to
                develop a comprehensive strategy that will yield the online
                visibility your brand deserves.
              </p>
            </div>
          </div>
        </div>
        <SliderContainer />
      </div>
    </div>
  );
};

export default AboutPage;
