import React from "react";
import Post from "../../assests/images/mainImage.svg";
import NewsCard from "../../Components/NewsCard/NewsCard";
import HelmetComponent from "../../Components/HelmetComponent";
import { pageTitleDescription } from "../../utlis/variables";

const NewsPage = () => {
  return (
    <div>
      <HelmetComponent
        title={pageTitleDescription.NEWS.title}
        description={pageTitleDescription.NEWS.description}
      />
      <div className='container'>
        <div className='container-fluid p-0'>
          <div className='container py-5'>
            <h1 className='display-4 text-center' style={{ fontWeight: "500" }}>
              News & Articles
            </h1>
            <p className='text-center text-muted'>
              Stay Updated with tech and implementation through our news section
            </p>
          </div>

          <div
            className='hero-section'
            style={{ backgroundImage: `url(${Post})` }}
          >
            <div className='overlay'></div>
            <div className='content-wrapper d-flex flex-column justify-content-center align-items-center text-white'>
              <span className='travel-tag mb-4'>Travel</span>

              <h2
                className='main-title text-center display-4 mb-4'
                style={{ maxWidth: "800px" }}
              >
                Richird Norton photorealistic rendering as <br></br>
                real photos
              </h2>

              <p
                className='subtitle text-center mb-4'
                style={{ maxWidth: "600px" }}
              >
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>

              <button className='read-now-btn'>Read now</button>
            </div>
          </div>
        </div>
        <NewsCard />
        <div className='button-container'>
          <button className='button-load-more'>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
