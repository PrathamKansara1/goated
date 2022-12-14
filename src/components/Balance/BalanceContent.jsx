import React from "react";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import LightText from "../LightText";
import "./Balance.css";

const BalanceContent = ({ customStyle,logoType, logo, text, value }) => {
  return (
    <div className="balance_content" style={customStyle}>
      <div className="balance_content_logo">
        {logoType && logoType === "svg" ? logo : <img src={logo} alt="" />}
      </div>
      <div className="balance_content_detail">
        <LightText
          lightText={text}
          customStyle={{ fontSize: "13px", fontWeight: "600" }}
        />
        <HomePageTitle title={"$" + value} customStyle={{ fontSize: "22px" }} />
      </div>
    </div>
  );
};

export default BalanceContent;
