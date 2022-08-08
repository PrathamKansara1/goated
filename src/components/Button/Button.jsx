import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const index = (props) => {
  return (
    <Link style={props.customStyle} to={props.navigate} className="primary_button">
      <span>{props.text}</span>
    </Link>
  );
};

export default index;
