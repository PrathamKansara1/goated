import React from "react";
import Box from "../Box/Box";
import "./BetForm.css";
import LightText from "../LightText";
import HomePageTitle from "../HomePageTitle";
import Madrid from "../../assets/AccountPage/Madrid.png";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Icons from "../Icons";
import BalanceBtn from "../BalanceBtn/BalanceBtn";
import BetFormCompo from "./BetFormCompo";
import Button from '../Button'
import BetWarning from '../../assets/Png/BetWarning.png'

const BetForm = () => {
  return (
    <Box customStyle={{ height: "500px", width: "330px" }}>
      <div className="bet_form">
        <div className="bet_form_upper">
          <div className="bet_form_svg">
            <img src={Madrid} alt="" />
          </div>
          <div className="bet_form_title">
            <LightText
              lightText="Outcome"
              customStyle={{
                fontSize: "13px",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            />
            <HomePageTitle
              title="Real Madrid Wins"
              customStyle={{ fontSize: "15px", fontWeight: "600" }}
            />
          </div>
          <div className="bet_form_icon">
            <Icons icon={<MdArrowDropDown />} />
          </div>
        </div>
        <div className="bet_form_middle">
          <div className="bet_form_middle_one">
            <LightText
              lightText="odds"
              customStyle={{
                fontSize: "12px",
                fontWeight: "6000",
                textTransform: "uppercase",
              }}
            />
            <HomePageTitle
              title="0.92"
              customStyle={{ fontSize: "14px", fontWeight: "600" }}
            />
          </div>
          <div className="bet_form_middle_two">
            <LightText
              lightText="Amount"
              customStyle={{
                fontSize: "12px",
                fontWeight: "6000",
              }}
            />
            <div className="bet_form_amount">
              <HomePageTitle
                title="$293"
                customStyle={{ fontSize: "15px", fontWeight: "600" }}
              />
              <div className="amount_arrows">
                <Icons icon={<MdArrowDropUp />} />
                <Icons icon={<MdArrowDropDown />} />
              </div>
            </div>
          </div>
          <div className="bet_form_middle_three">
            <LightText
              lightText="Balance $2930"
              customStyle={{
                fontSize: "12px",
                fontWeight: "6000",
              }}
            />
            <div className="bet_options">
              <BalanceBtn value="5" />
              <BalanceBtn value="25" />
              <BalanceBtn value="50" />
              <BalanceBtn value="75" />
              <BalanceBtn value="100" />
            </div>
          </div>
          <div className="bet_form_middle_four">
            <BetFormCompo name="Payout" value="33.00" />
            <BetFormCompo name="Stake" value="12.21" />
            <BetFormCompo name="Profits" value="20.38" />
          </div>
        </div>
        <div className="bet_form_lower">
          <Button navigate="/" text="Place Bet" customStyle={{height:"38px", width:"276px"}}/>
          <div className="place_bet_warning">
            <img src={BetWarning} alt="" />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BetForm;
