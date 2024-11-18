import React from "react";
import { Articles } from "../../utlis/variables";
import { useNavigate } from "react-router-dom";

const NewsCard = ({show}) => {
    const navigate = useNavigate();

    const handleViewArticle=()=>{
        navigate('/view-article')
    }
  return (
    <div>
      <div className="row" style={{paddingTop:"100px"}}>
    {show &&  <p className="news-heading">You may also like</p> } 

        {Articles.map((article, index) => (
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mb-4"
            key={index}
          >
            <div>
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
