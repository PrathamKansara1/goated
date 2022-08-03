import React from "react";
import SliderTop from "../../components/SliderTop";
import Vector from "../../assets/Vector.png";
import "./Preference.css";
import Intrests from "../../components/Intrests";
import Basketball from "../../assets/IntrestSvg/Basketball.svg";
import Baseball from "../../assets/IntrestSvg/Baseball.svg";
import Esports from "../../assets/IntrestSvg/Esports.svg";
import Football from "../../assets/IntrestSvg/Football.svg";
import Mma from "../../assets/IntrestSvg/MMA.svg";
import Rugby from "../../assets/IntrestSvg/Rugby.svg";
import Tennis from "../../assets/IntrestSvg/Tennis.svg";
import Volleyball from "../../assets/IntrestSvg/Volleyball.svg";
import Add from "../../assets/IntrestSvg/addIntrest.svg";
import Done from "../../assets/IntrestSvg/Done.svg";
import { Link } from "react-router-dom";

const Preference = () => {
  const intrests = [
    {
      intrest_name: "Football",
      intrest_svg: Football,
      status_svg: Add,
      status: "unselected",
    },
    {
      intrest_name: "Baseball",
      intrest_svg: Baseball,
      status_svg: Add,
      status: "unselected",
    },
    {
      intrest_name: "Tennis",
      intrest_svg: Tennis,
      status_svg: Add,
      status: "unselected",
    },
    {
      intrest_name: "Basketball",
      intrest_svg: Basketball,
      status_svg: Add,
      status: "unselected",
    },
    {
      intrest_name: "Esports",
      intrest_svg: Esports,
      status_svg: Done,
      status: "selected",
    },
    {
      intrest_name: "MMA",
      intrest_svg: Mma,
      status_svg: Add,
      status: "unselected",
    },
    {
      intrest_name: "Volleyball",
      intrest_svg: Volleyball,
      status_svg: Add,
      status: "unselected",
    },
    {
      intrest_name: "Rugby",
      intrest_svg: Rugby,
      status_svg: Add,
      status: "unselected",
    },
  ];
  return (
    <div className="preference_container">
      <SliderTop
        title="Select your preference"
        description="We’re glad to have you onboard with us"
        slide="second"
      />
      <div className="rectangle_1392_preference">
        <span className="price_format preference_titles">Price Format</span>
        <div className="preference_radio">
          <div className="radio_btn_preference">
            <input
              type="radio"
              id="decimal"
              name="preference_radio"
              value="Decimal"
            />
            <label htmlFor="decimal">Decimal</label>
          </div>
          <div className="radio_btn_preference">
            <input
              type="radio"
              id="american"
              name="preference_radio"
              value="American"
            />
            <label htmlFor="american">American</label>
          </div>
          <div className="radio_btn_preference">
            <input
              type="radio"
              id="probability"
              name="preference_radio"
              value="Probability"
            />
            <label htmlFor="probability">Probability</label>
          </div>
        </div>
        <div className="vector_31"></div>
        <span className="select_intrests preference_titles">
          select intrests
        </span>
        <div className="intrests">
          {intrests.map((item, index) => (
            <Intrests
              name={item.intrest_name}
              intrest_svg={item.intrest_svg}
              status_svg={item.status_svg}
              status={item.status}
              key={index}
            />
          ))}
        </div>
        <Link to="/" className="preference_button">
          <span>Continue to Goated</span>
        </Link>
      </div>

      <div className="zigzag_vertical_preference">
        <img src={Vector} alt="" />
        <img src={Vector} alt="" />
      </div>
    </div>
  );
};

export default Preference;
