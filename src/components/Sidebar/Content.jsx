import React from "react";
import "./Sidebar.css";
import Png1 from "../../assets/contents/contentPng1.png";
import { MdArrowDropDown } from "react-icons/md";

const Content = () => {
  return (
    <div className="sidebar_content_child">
      <div className="sidebar_content_title_div">
        <img src={Png1} alt="" />
        <span>Champions League 22</span>
        <MdArrowDropDown />
      </div>
      <div className="content_values">
        <ul className="content_values_item">
          <div className="content_item">
            <li>Bayern M vs Man Utd</li>
            <span>12</span>
          </div>
          <div className="content_item">
            <li>Chelsea vs Real M</li>
            <span>12</span>
          </div>
          <div className="content_item">
            <li>Arsenal vs Totenham</li>
            <span>12</span>
          </div>
          <div className="content_item">
            <li>Leicester vs Man City</li>
            <span>12</span>
          </div>
          <div className="content_item">
            <li>Totenham vs Man Utd</li>
            <span>12</span>
          </div>
          <div className="content_item">
            <li>Juventus vs Arsenal</li>
            <span>12</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Content;
