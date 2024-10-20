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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="sub-headig-image position-absolute">Travel</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            className="position-absolute sub-heading-2"
            style={{ margin: "0", lineHeight: "1.1" }}
          >
            Richird Norton photorealistic rendering as
            <span style={{ display: "block", margin: 0, padding: 0 , textAlign:'center'}}>real photos</span>  
            </p>
        </div>
        <div className="position-absolute sub-heading-3">
        <div style={{ display: "flex", justifyContent: "center" ,marginLeft:"300px"}}>

          <p>Progressively incentivize cooperative systems through technically sound 
            <br/>
            functionalities. The credibly productivate seamless data.</p>
          </div>
          <div className="position-absolute" style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", marginLeft:"550px"}} >
            <button className="read-now ">Read Now </button>
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
