import React from "react";
import SliderContainer from "../../Components/Slide/SliderContainer";

import { HomeChooseUsData, ServiceData } from "../../utlis/variables";
import Card from "../../Components/Cards/Card";
import abcd from "../../assests/images/why-choose-us.png";
import arrowPortfolio from '../../assests/images/portfoliio.svg'
import { Button } from "bootstrap";
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

      {/* Services Section */}
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
      <div className="row justify-content-center" style={{ padding: '100px 70px' }}>
        <div className="col-12 col-md-4 text-center">
          <div className="d-flex flex-column flex-md-row align-items-center gap-2">
          <h2 className="port-heading">Portfolio</h2>
           <img src={arrowPortfolio} alt='icon' className='img-fluid' />
          </div>
       <p className="sub-text">Take a look at some of our work</p>
        </div>
        <div className="col-12 col-md-8 right-paragraph" style={{width:"40%"}}>
          <h2>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed. Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
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
      <div>
        <div>
          <h1>Our Process</h1>
          <p>How Ophanim Works: A Step-by-Step Guide.
            We understand the problem first, then make it go away....</p>
          <div>
            <button>SEO Work</button>
            <p>CretiveWork</p>
          </div>
        </div>
        <div>
          <div><h2>Tackling Problems</h2>
            <p>We listen to our clients’ problems and devise the most suitable strategy for their business growth. We also provide a report regarding the current issues the business is facing.</p>
          </div>
          <div><h2>Brainstorming</h2>
            <p>We target the problem and define essential parameters to solve it. We then send you reports for feedback and discussion, keeping the process moving in the desired direction.</p>
          </div>

          <div><h3>Engineered Approach</h3>
            <p>We have the ability to achieve goals through a well-designed procedure that avoids any last minute problems.</p>
          </div>

        </div>
      </div>
      <SliderContainer />
    </div>
  );
}

export default Home;

