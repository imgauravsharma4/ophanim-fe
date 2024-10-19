import React from "react";
import { Articles } from "../../utlis/variables";
import Post from "../../assests/images/Big Post.svg";

const NewsPage = () => {
  return (
    <div>
      <div className="container">
        <p className="text-center fs-1">News & Articles</p>
        <p className="text-center">
          Stay Updated with tech and implementation through our news section
        </p>

        <div className="text-center mb-5">
          <img src={Post} alt="seo ranking" className="img-fluid" />
        </div>

        <div className="row">
          {Articles.map((article, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4" key={index}>
              <div style={{ width: "400px", height: "359.2px" }}>
                <img
                  className="card-img-top img-fluid"
                  src={article.image}
                  alt={`Card image cap ${index}`}
                />
              </div>
              <div>
                <h5>{article.title}</h5>
                <p>{article.description}</p>
                <p>View Post</p>
                <p
                  style={{
                    width: "108px",
                    background: "#121416",
                    height: "1px",
                    cursor: "pointer",
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              width: "240px",
              height: "54px",
              borderRadius: "7px",
              borderColor: "#8C8C8C",
              backgroundColor: "#fff",
              color: "#000",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom:"50px"
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
