import React from "react";
import SliderTop from "../../components/SliderTop";
import "./Funding.css";
import Vector from "../../assets/Png/Vector.png";
import {SuccessLogo} from '../../assets/ImpLogo/SuccessLogo'
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

const Success = () => {
  return (
    <>
      <Navbar main_pages="false" />
      <div className="funding_container">
        <SliderTop
          title="Find your account"
          description="Easily import your funds from FTX"
          slide="third"
        />

        <div className="rectangle_1392_funding_success">
          <div className="success_logo">
            <img src={<SuccessLogo/>} alt="" />
          </div>
          <span className="success_bold">12,304 USDC</span>
          <span className="success_message">Deposit Successful</span>
          <Button
            customStyle={{
              height: "40px",
              width: "387px",
              marginTop: "36px",
            }}
            navigate="/Home"
            text="Continue To Goated"
          />
        </div>

        <div className="zigzag_vertical_funding">
          <img src={Vector} alt="vector" />
          <img src={Vector} alt="vector" />
        </div>
      </div>
    </>
  );
};

export default Success;
