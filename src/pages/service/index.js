import React from "react";
import SeoRankingImage from "../../assests/images/Photo.png";
import VisionImage from "../../assests/images/Photo2.png";

import Card from "../../Components/Cards/Card";
import {
  AgencyData,
  ExpertiseData,
  SeoRankingData,
  ServiceData,
} from "../../utlis/variables";
import SliderContainer from "../../Components/Slide/SliderContainer";
import ListItem from "../../Components/ListItem/ListItem";

const ServicePage = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='image-wrapper'>
              <img
                src={SeoRankingImage}
                alt='seo ranking'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <Card
              icon={SeoRankingData.icon}
              heading={SeoRankingData.heading}
              content={SeoRankingData.content}
              content2={SeoRankingData.content2}
            />
          </div>
        </div>
        <div className='row section-wrapper'>
          <div className='col-xl-12'>
            <h4 className="mb-3">
              Why Choose Ophanim As Your Social Media Optimization Agency?
            </h4>
            <p>
              Selecting the appropriate social media optimization services is
              crucial for the growth and success of your business. As a leading
              SMO company in the USA, we are proud to be the top choice for
              hundreds of companies. Learn why we are the go-to partner for SMO
              campaign success.
            </p>
          </div>
          {AgencyData?.map((item, index) => (
            <div
              className='col-xl-6 col-md-12 col-sm-12 mb-4'
              key={`item${index}`}
            >
              <Card
                classes='white-background'
                icon={item.icon}
                heading={item.heading}
                content={item.content}
              />
            </div>
          ))}
        </div>
        <div className='row section-wrapper'>
          <div className='col-xl-12 col-sm-12'>
            <h2>Top Notch Services</h2>
            <p>
              Elevate your online presence with our comprehensive social media
              service
            </p>
          </div>
          {ServiceData?.map((item, index) => (
            <div
              className='col-xl-6 col-md-12 col-sm-12 mb-4'
              key={`item${index}`}
            >
              <Card
                classes='white-background'
                icon={item.icon}
                heading={item.heading}
                content={item.content}
                tags={item.tags}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='section-wrapper yellow-bg'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
              <div className='expertise-section'>
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
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
              <div className='image-wrapper'>
                <img
                  src={VisionImage}
                  alt='seo ranking'
                  className='img-fluid'
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
