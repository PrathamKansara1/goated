import React from "react";
import "./Icons.css";

const Icons = (props) => {
  return (
    <>
      <div className="icon_component" style={props.customStyle}>{props.icon}</div>
    </>
  );
};

export default Icons;
