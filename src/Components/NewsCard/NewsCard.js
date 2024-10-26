import React from "react";
import { Articles } from "../../utlis/variables";
import { useNavigate } from "react-router-dom";

const NewsCard = () => {
    const navigate = useNavigate();

    const handleViewArticle=()=>{
        navigate('/view-article')
    }
  return (
    <div>
      <div className="row">
        {Articles.map((article, index) => (
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4"
            key={index}
          >
            <div style={{ width: "400px", height: "359.2px" }}>
              <img
                className="img-fluid"
                src={article.image}
                alt={`Card image cap ${index}`}
              />
            </div>
            <div>
              <h5>{article.title}</h5>
              <p>{article.description}</p>
              <p  style={{cursor:"pointer"}} onClick={handleViewArticle}>View Post</p>
              <p
             className="line-horizontal"
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
