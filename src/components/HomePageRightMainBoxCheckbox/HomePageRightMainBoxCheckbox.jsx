import React from "react";
import Checkbox from "../Checkbox";
import "./HomePageRightMainBoxCheckbox.css";

const HomePageRightMainBoxCheckbox = (props) => {
  return (
    <div className="checks">
      <Checkbox />
      <span>{props.description}</span>
    </div>
  );
};

export default HomePageRightMainBoxCheckbox;
