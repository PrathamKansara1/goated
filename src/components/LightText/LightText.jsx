import React from "react";
import "./LightText.css";

const LightText = (props) => {
  return (
    
      <span className="light_text" style={props.customStyle}>{props.lightText}</span>
    
  );
};

export default LightText;
