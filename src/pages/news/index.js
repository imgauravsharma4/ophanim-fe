import React from "react";
import Post from "../../assests/images/mainImage.svg";
import NewsCard from "../../Components/NewsCard/NewsCard";

const NewsPage = () => {
  return (
    <div>
      <div className="container">
        <p className="text-center fs-1">News & Articles</p>
        <p className="text-center">
          Stay Updated with tech and implementation through our news section
        </p>

        <div className="text-center mb-5 position-relative">
          <img src={Post} alt="seo ranking" className="img-fluid" />
        </div>
        <div className="d-flex justify-content-center">
          <p className="sub-headig-image">Travel</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="sub-main-heading">
           Richird Norton photorealistic rendering as
            <span>real photos</span>
          </p>
          <p></p>
        </div>
        <div className="position-absolute sub-heading-3 d-flex justify-content-center align-items-center text-center">
          <div>
            Progressively incentivize cooperative systems through technically
            sound
            <br />
            functionalities. The credibly productivate seamless data.
          </div>
        </div>

        <div
          className="position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button className="read-now">Read Now</button>
        </div>

        <NewsCard />

        <div className="button-container">
          <button className="button-load-more">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
