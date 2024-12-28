import React from "react";
import HelmetComponent from "../HelmetComponent";
import {
  ExpertiseData,
  pageTitleDescription,
  ServicePagesData,
  servicesCategory,
} from "../../utlis/variables";
import PageHeader from "../PageHeader";
import Card from "../Cards/Card";
import ListItem from "../ListItem/ListItem";
import SliderContainer from "../Slide/SliderContainer";

import SeoRankingImage from "../../assests/images/Photo.png";
import VisionImage from "../../assests/images/Photo2.png";

const ServicePages = ({ type }) => {
  const data = ServicePagesData[type] ?? [];
  const metaData = pageTitleDescription[type] ?? {};
  return (
    <div>
      <HelmetComponent
        title={metaData.title}
        description={metaData.description}
      />
      <PageHeader
        title={data.pageHeader.title}
        subTitle={data.pageHeader.subTitle}
        tagline={data.pageHeader.tagline}
        buttonText={"Get a Quote"}
        classes={"text-center"}
      />

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
              icon={data.first_section_icon}
              heading={data.first_section_heading}
              content={data.first_section_content1}
              content2={data.first_section_content2}
            />
          </div>
        </div>
        <div className='row section-wrapper'>
          <div className='col-xl-12'>
            <h4 className='mb-3'>{data.second_section_heading}</h4>
            <p>{data.second_seaction_paragraph}</p>
          </div>
          {data.agencyData?.map((item, index) => (
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
      </div>

      {type === servicesCategory.SMO_SERVICES && (
        <>
          <section className='section-background'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12 col-sm-12 text-center'>
                  <h2 className='services-header'>
                    {data.third_section_heading}
                  </h2>
                  <p className='services-subheader'>
                    {data.third_section_content}
                  </p>
                </div>
                {data.serviceData?.map((item, index) => (
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
          </section>
          <div className='section-wrapper yellow-bg'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                  <div className='expertise-section'>
                    <h2>Your Vision, Our Expertise</h2>
                    <p>
                      Our Partnership Philosophy: Building Trust, Delivering
                      Success
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
        </>
      )}
      <SliderContainer />
    </div>
  );
};

export default ServicePages;
