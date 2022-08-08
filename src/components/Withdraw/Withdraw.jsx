import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Box from "../Box";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import "./Withdraw.css";

import FundingLogo from "../../assets/fundinglogo.svg";
import Button from "../Button";

const Withdraw = (props) => {
  return (
    <Box customStyle={props.customStyle}>
      <div className="withdraw_first">
        <div className="withdraw_title">
          <img src={FundingLogo} alt="logo" />
          <HomePageTitle
            title="Withdraw to FTX"
            customStyle={{ fontSize: "12px" }}
          />
        </div>
        <input type="text" placeholder="Enter an amount" />
        <div className="arrows">
          <IoIosArrowUp />
          <IoIosArrowDown />
        </div>
        <Button
          navigate="/Home"
          text="Withdraw Funds"
          customStyle={{ height: "38px", width: "384px" }}
        />
      </div>
      <div className="withdraw_second">
        <HomePageTitle
          title="Deposit From Wallet"
          customStyle={{ fontSize: "12px" }}
        />
        <input type="text" placeholder="0x7hufkh732Dhf" />
        <Button
          navigate="/Home"
          text="Withdraw To Wallet"
          customStyle={{ height: "38px", width: "384px" }}
        />
      </div>
    </Box>
  );
};

export default Withdraw;
