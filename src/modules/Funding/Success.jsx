import React from "react";
import SliderTop from "../../components/SliderTop";
import "./Funding.css";
import { Link } from "react-router-dom";
import Vector from "../../assets/Vector.png";
import SuccessLogo from "../../assets/successsvg.svg";

const Success = () => {
  return (
    <div className="funding_container">
      <SliderTop
        title="Find your account"
        description="Easily import your funds from FTX"
        slide="third"
      />

      <div className="rectangle_1392_funding_success">
        <div className="success_logo">
          <img src={SuccessLogo} alt="" />
        </div>
        <span className="success_bold">12,304 USDC</span>
        <span className="success_message">Deposit Successful</span>
        <Link to="/funding/success" className="funding_success_button">
          <span>Continue to Goated</span>
        </Link>
      </div>

      <div className="zigzag_vertical_funding">
        <img src={Vector} alt="vector" />
        <img src={Vector} alt="vector" />
      </div>
    </div>
  );
};

export default Success;
