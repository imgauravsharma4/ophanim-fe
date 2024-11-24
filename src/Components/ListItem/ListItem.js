import React from "react";
import CheckCricleImage from "../../assests/images/Check circle.png";

const ListItem = ({ item, index, icon }) => {
  return (
    <li key={`item${index}`}>
      <img src={icon ? icon : CheckCricleImage} alt='check circle' className='img-fluid' />
      {item}
    </li>
  );
};

export default ListItem;
