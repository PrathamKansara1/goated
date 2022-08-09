import React from "react";
import CardDescription from "../CardDescription/CardDescription";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import Icons from "../IconsCard";
import LightText from "../LightText";
import "./Card.css";
import Germany from "../../assets/HomePage/Germany.png";

const Card = ({item,customStyle}) => {
  const description = item.description;
  return (
    <div className="card" style={customStyle}>
      <div className="upper_card">
        <Icons />
        <div className="card_title">
          <HomePageTitle
            title={item.title && item.title}
            customStyle={{ fontSize: "20px" }}
          />
        </div>
        <div className="card_detail">
          <LightText
            lightText={item.date && item.date}
            customStyle={{ fontSize: "13px", textTransform: "uppercase" }}
          />
          <li>
            <LightText
              lightText={item.time && item.time + " gmt"}
              customStyle={{ fontSize: "13px", textTransform: "uppercase" }}
            />
          </li>
        </div>
      </div>
      <div className="middle_card"></div>
      <div className="lower_card">
        {description.map((desc,index) => (
          <CardDescription desc={desc} svg={Germany} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Card;
