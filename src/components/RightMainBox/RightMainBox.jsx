import React from "react";
import HomePageRightMainBoxCheckbox from "../HomePageRightMainBoxCheckbox";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import "./RightMainBox.css";
import Logo from "../../assets/fundinglogo.svg";
import { MdArrowRight } from "react-icons/md";

const RightMainBox = (props) => {
  console.log(props);
  const { ...other } = props;
  return (
    <div className="right_main_box" {...other}>
      <div className="box_1">
        <HomePageTitle title="Why join Goated?" />
        <div className="conditions">
          <HomePageRightMainBoxCheckbox description="Login using your exisitng FTX Account" />
          <HomePageRightMainBoxCheckbox description="Easily withdraw and deposit anytime" />
          <HomePageRightMainBoxCheckbox description="Trusted by 10,000+ Customers" />
        </div>

        <button className="signin_button">
          <img src={Logo} alt="" />
          <span>Sign In FTX</span>
          <MdArrowRight />
        </button>
      </div>
    </div>
  );
};

export default RightMainBox;
