import React from "react";
import SeoRankingImage from "../../assests/images/Photo.png";
import VisionImage from "../../assests/images/Photo2.png";

import Card from "../../Components/Cards/Card";
import {
  AgencyData,
  ExpertiseData,
  SeoRankingData,
} from "../../utlis/variables";
import SliderContainer from "../../Components/Slide/SliderContainer";
import ListItem from "../../Components/ListItem/ListItem";
import PageHeader from "../../Components/PageHeader";

const ServicePage = () => {
  return (
    <div>
      <PageHeader
        title={"Most In-Demand  "}
        subTitle={"SEO Services in the USA"}
        tagline={
          "#1 SEO service provider company that helps you establish the online presence you deserve, ensuring your business stands out in the digital landscape."
        }
        buttonText={"Get a Quote"}
        classes={"text-center"}
      />

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-wrapper">
              <img
                src={SeoRankingImage}
                alt="seo ranking"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Card
              icon={SeoRankingData.icon}
              heading={SeoRankingData.heading}
              content={SeoRankingData.content}
              content2={SeoRankingData.content2}
            />
          </div>
        </div>
        <div className="row section-wrapper">
          <div className="col-xl-12">
            <h4 className="mb-3">
              Why Choose Ophanim for SEO Services in the USA?
            </h4>
            <p>
              At Ophanim, we prioritize your success over money. Our goal is to
              help your business website reach its targets with ease. Each
              metric needs careful analysis. Seeking help from leading SEO
              experts is essential for higher rankings and gaining a competitive
              edge.
            </p>
          </div>
          {AgencyData?.map((item, index) => (
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
      <div className="section-wrapper yellow-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="expertise-section">
                <h2>Your Vision, Our Expertise</h2>
                <p>
                  Our Partnership Philosophy: Building Trust, Delivering Success
                </p>
                <ul>
                  {ExpertiseData.map((item, index) => (
                    <ListItem item={item.name} index={index} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="image-wrapper">
                <img
                  src={VisionImage}
                  alt="seo ranking"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SliderContainer />
    </div>
  );
};

export default ServicePage;
