import React from "react";
import "./HomepageTitle.css";

const HomePageTitle = (props) => {
  return <span className="home_pages_title" style={props.customStyle}>{props.title}</span>;
};

export default HomePageTitle;
