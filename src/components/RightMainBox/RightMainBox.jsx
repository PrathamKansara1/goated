import React from "react";
import "./RightMainBox.css";

const RightMainBox = (props) => {
  console.log(props);
  const { ...other } = props;
  return <div className="right_main_box" {...other}>RightMainBox</div>;
};

export default RightMainBox;
