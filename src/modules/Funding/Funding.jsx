import React from "react";
import SliderTop from "../../components/SliderTop";
import Vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";
import "./Funding.css";
import USDSvg from "../../assets/usdsvg.svg";
import FundingLogo from "../../assets/fundinglogo.svg";
import Copybtn from "../../assets/copybtn.svg";
import Loader from "../../assets/loader.gif";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Navbar from "../../components/Navbar";

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

        <div className="rectangle_1392_funding">
          <div className="group_1816_funding">
            <span>Deposit form Wallet</span>
            <input type="text" placeholder="0x7hufkh732Dhf" />
            <img src={Copybtn} alt="copy" />
          </div>

          <div className="group_1815_funding">
            <div className="funding_title">
              <img src={FundingLogo} alt="logo" />
              <span>Deposit form FTX</span>
            </div>
            <input type="text" placeholder="Enter an amount" />
            <div className="arrows">
              <IoIosArrowUp />
              <IoIosArrowDown />
            </div>
            <div className="span_div_funding">
              <span>FTX Balance</span>
              <div className="last_span">
                <img src={USDSvg} alt="usd" />
                <div className="last_content">
                  <span>
                    <span>3455.39 </span>USDC
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link to="/funding/success" className="funding_button">
            <span>Continue to Goated</span>
          </Link>
        </div>

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
