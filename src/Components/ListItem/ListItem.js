import React from "react";
import CheckCricleImage from "../../assests/images/Check circle.png";

const ListItem = ({ item, index, icon }) => {
  return (
    <li key={`item - ${index}`} value={index}>
      <img src={icon ? icon : CheckCricleImage} alt='check circle' className='img-fluid' />
      {item.trim()}
    </li>
  );
};

export default ListItem;
