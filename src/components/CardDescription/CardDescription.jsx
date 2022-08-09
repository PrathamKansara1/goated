import React from "react";
import CardButton from "../CardButton/CardButton";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import "./CardDescription.css";

const CardDescription = ({desc,svg,customStyle}) => {
  return (
    <div className="card_description" style={customStyle}>
      <div className="left_card_description">
        <div className="card_description_svg">
          <img src={svg} alt="" />
        </div>
        <div className="card_description_name">
          <HomePageTitle title={desc.desc_title} customStyle={{fontSize : "14px"}} />
        </div>
      </div>
      <CardButton value={desc.desc_value} />
    </div>
  );
};

export default CardDescription;
