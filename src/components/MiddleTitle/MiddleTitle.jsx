import React from "react";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import Trending from "../../assets/HomePage/Trending.png";
import "./MiddleTitle.css";

const MiddleTitle = ({title,customStyle}) => {
  return (
    <>
      <div className="middle_title" style={customStyle}>
        <div className="middle_title_left">
          <img src={Trending} alt="" />
          <HomePageTitle
            title={title}
            customStyle={{ fontSize: "20px" }}
          />
        </div>
        <div className="middle_title_right"></div>
      </div>
    </>
  );
};

export default MiddleTitle;
