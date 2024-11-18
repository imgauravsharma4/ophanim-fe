import React from "react";
import Post from "../../assests/images/mainImage.svg";
import NewsCard from "../../Components/NewsCard/NewsCard";

const NewsPage = () => {
  return (
    <div>
      <div className="container">
        <div class="container-fluid p-0">
          <div class="container py-5">
            <h1 class="display-4 text-center" style={{fontWeight:"500"}}>News & Articles</h1>
            <p class="text-center text-muted">
              Stay Updated with tech and implementation through our news section
            </p>
          </div>

          <div class="hero-section" style={{ backgroundImage: `url(${Post})` }}
          >
            <div class="overlay"></div>
            <div class="content-wrapper d-flex flex-column justify-content-center align-items-center text-white">
              <span class="travel-tag mb-4">Travel</span>

              <h2 class="main-title text-center display-4 mb-4" style={{ maxWidth: "800px" }}>
                Richird Norton photorealistic rendering as <br></br>
                real photos
              </h2>

              <p class="subtitle text-center mb-4" style={{ maxWidth: "600px" }}>
                Progressively incentivize cooperative systems through technically sound
                functionalities. The credibly productivate seamless data.
              </p>

              <button class="read-now-btn">Read now</button>
            </div>
          </div>
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
