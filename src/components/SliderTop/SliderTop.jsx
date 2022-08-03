import React from "react";
import './SliderTop.css'

const SliderTop = (props) => {

    
  return (
    <>
      <div className="slider">
        <div className="slider_title">
          <span>{props.title}</span>
        </div>
        <div className="slider_description">
          <span>{props.description}</span>
        </div>
      </div>
      <div className="slider_divs">
        <div className={props.slide === "first" ? "active rectangle_140X" : "rectangle_140X"}></div>
        <div className={props.slide === "second" ? "active rectangle_140X" : "rectangle_140X"}></div>
        <div className={props.slide === "third" ? "active rectangle_140X" : "rectangle_140X"}></div>
      </div>
    </>
  );
};

export default SliderTop;
