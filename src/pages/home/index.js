import React from "react";
import SliderContainer from "../../Components/Slide/SliderContainer";

import { HomeChooseUsData, seoPlans, ServiceData } from "../../utlis/variables";
import Card from "../../Components/Cards/Card";
import abcd from "../../assests/images/why-choose-us.png";
import PortfolioSlider from "../../Components/PortfolioSlider/PortfolioSlider";
import ProcessSection from "../../Components/ProcessSection/ProcessSection";
import PortfolioSection from "../../Components/PortfolioSection/PortFolioSections";
import PlansCard from "../../Components/Cards/Plans-Card";
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="homebg">
        <div className="container-wrapper container">
          <div className="left-section">
            <h1>
              Unlock Your <br />
              <span className="highlight-text">Brand Potential</span>
            </h1>
            <p className="subtext">
              Generate <span className="bold-text">500%</span> More revenue with
              us.
            </p>
            <button className="cta-button">Get Started Now</button>
          </div>
          <div className="right-section">
            <img src="/../images/marketing.png" alt="Marketing Campaign" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-sm-12 text-center">
            <h2 className="services-header">Top Notch Services</h2>
            <p className="services-subheader">
              Elevate your online presence with our comprehensive social media
              service
            </p>
          </div>
          {ServiceData?.map((item, index) => (
            <div
              className="col-xl-6 col-md-12 col-sm-12 mb-4"
              key={`item${index}`}
            >
              <Card
                classes="white-background"
                icon={item.icon}
                heading={item.heading}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
  <PortfolioSection/>
      <div >
        <PortfolioSlider />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-sm-12 text-align-left">
            <h2 className="services-header">Why Choose Us</h2>
            <p className="services-subheader">
              The Benefits of Partnering with Us
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="image-wrapper">
              <img src={abcd} alt="Team Collaboration" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <div className="row ">
              {HomeChooseUsData?.map((item, index) => (
                <div
                  className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-3"
                  key={`item${index}`}
                >
                  <Card
                    classes="chooseUs"
                    icon={item.icon}
                    content={item.content}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     <ProcessSection/>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <h2>SEO Plans</h2>
            <p>Choose the plan right for you and let’s get started</p>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="toggle-container ">
              <button className="toggle-button active">Monthly</button>
              <button className="toggle-button">Yearly</button>
            </div>
          </div>
        </div>
        <div className="row">
          {seoPlans?.map((plan, index) => (
            <div
              className="col-xl-3 col-md-12 col-sm-12 mb-4"
              key={`item${index}`}
            >
              <PlansCard
                key={index}
                planName={plan.planName}
                price={plan.price}
                features={plan.features}
                isHighlighted={plan.isHighlighted}
                icon={plan.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <SliderContainer />
    </div>
  );
}

export default Home;
