import React from "react";
import SliderTop from "../../components/SliderTop";
import Vector from "../../assets/Png/Vector.png";
import { Link } from "react-router-dom";
import "./Funding.css";
import Loader from "../../assets/Png/loader.gif";
import Navbar from "../../components/Navbar";
import Deposit from "../../components/Deposit/Deposit";

const Funding = () => {
  return (
    <>
      <Navbar main_pages="false" />
      <div className="funding_container">
        <SliderTop
          title="Find your account"
          description="Easily import your funds from FTX"
          slide="third"
        />

        <Deposit />

        <div className="rectangle_429">
          <div className="loader_funding">
            <img src={Loader} alt="loader" />
          </div>
          <span>
            It takes about 3-4 minutes for the transaction to be confirmed{" "}
          </span>
        </div>

        <Link className="skip_text" to="/funding">
          skip for now
        </Link>

        <div className="zigzag_vertical_funding">
          <img src={Vector} alt="vector" />
          <img src={Vector} alt="vector" />
        </div>
      </div>
    </>
  );
};

export default Funding;
