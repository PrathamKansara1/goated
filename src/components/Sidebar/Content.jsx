import React from "react";
import "./Sidebar.css";
import Png1 from "../../assets/contents/championsleague22.png";
import { MdArrowDropDown } from "react-icons/md";

const Content = ({ item }) => {
  const matches = item.matches;
  return (
    <div className="sidebar_content_child">
      <div className="sidebar_content_title_div">
        <img src={Png1} alt="" />
        <span>{item.title}</span>
        <MdArrowDropDown />
      </div>
      <div className="content_values">
        <ul className="content_values_item">
          {matches.map((match, i) => (
            <div className="content_item" key={i}>
              <li>{match.match}</li>
              <span>{match.match_val}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
