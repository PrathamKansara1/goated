import React from "react";
import Button from "../Button";
import "./Deposit.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import USDSvg from "../../assets/Png/Usd.png";
import Box from "../Box";
import {CopyBtn} from '../../assets/ImpLogo/CopyBtn'
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import {Funding} from '../../assets/ImpLogo/Funding'

const Deposit = (props) => {
  return (
    <Box customStyle={props.customStyle}>
      <div className="group_1816_funding">
        <HomePageTitle title="Deposit From Wallet" customStyle={{fontSize : "12px"}} />
        <input type="text" placeholder="0x7hufkh732Dhf" />
        <img src={<CopyBtn/>} alt="copy" />
      </div>

      <div className="group_1815_funding">
        <div className="funding_title">
          <img src={<Funding/>} alt="logo" />
          <HomePageTitle title="Deposit from FTX" customStyle={{fontSize : "12px"}} />
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

      <Button
        customStyle={{
          height: "38px",
          width: "364px",
          marginTop: "36px",
          marginLeft: "26px",
        }}
        navigate="/funding/success"
        text="Continue To Goated"
      />
    </Box>
  );
};

export default Deposit;
