import React, { useState } from "react";
import { MdArrowBack, MdClose } from "react-icons/md";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";
import Icons from "../../components/Icons";
import LightText from "../../components/LightText";
import MainContainer from "../../components/MainContainer/MainContainer";
import Mainpage from "../../components/MainPage/Mainpage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Markets.css";
import Active from "../../assets/AccountPage/active.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Data from "../../data/Data.json";
import MarketCard from "./MarketCard";
import MiddleTitle from "../../components/MiddleTitle/MiddleTitle";
import Card from "../../components/Card";
import BetForm from "../../components/BetForm/BetForm";

const Markets = () => {
  const cardData = Data.Cards;
  const [formShow, setFormShow] = useState(true);
  const closeBtnHandler = () => {
    setFormShow(false)
  }
  return (
    <Mainpage>
      <Navbar main_pages="true" active="Markets" />
      <div className="side_content">
        <Sidebar customStyle={{ flex: "2" }} />
        <MainContainer customStyle={{ flex: "6" }}>
          <div className="market_event_name">
            <div className="event_name_left">
              <Icons
                customStyle={{ fontSize: "17px" }}
                icon={<MdArrowBack />}
              />
              <LightText
                lightText="Football / Events / Worldcup"
                customStyle={{
                  fontSize: "17px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              />
            </div>
            <Icons
              customStyle={{ fontSize: "17px" }}
              icon={<BiDotsVerticalRounded />}
            />
          </div>
          <div className="market_match_name">
            <HomePageTitle
              title="Real Madrid vs Barcelona"
              customStyle={{ fontSize: "30px", fontWeight: "700" }}
            />
            <img src={Active} alt="" />
          </div>
          <div className="match_date_time">
            <LightText
              lightText="Jun 16"
              customStyle={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--secondary)",
                textTransform: "uppercase",
              }}
            />
            <ul>
              <li style={{ color: "var(--secondary)" }}>
                <LightText
                  lightText="2:40 PM gmt"
                  customStyle={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--secondary)",
                    textTransform: "uppercase",
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="event_description">
            <LightText
              lightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "
              customStyle={{ fontSize: "16px", fontWeight: "400" }}
            />
          </div>
          <div className="market_cards">
            <MarketCard customStyle={{ marginTop: "45px", flex: "1" }} />
            <MarketCard customStyle={{ marginTop: "45px", flex: "1" }} />
          </div>
          <MiddleTitle
            title="Similar Markets"
            customStyle={{ marginBottom: "30px" }}
          />
          <div className="market_lower_cards">
            {cardData.map((item, index) => (
              <Card
                item={item}
                key={index}
                customStyle={{ width: "50%", paddingTop: "15px" }}
              />
            ))}
          </div>
        </MainContainer>
        <div className="markets_right" style={{ flex: "2" }}></div>
        {formShow ? (
          <div className="BET_FORM">
            <BetForm />
            <div className="close_btn_bet_form">
              <MdClose onClick={closeBtnHandler}/>
            </div>
          </div>
        ) : (
          []
        )}
      </div>
    </Mainpage>
  );
};

export default Markets;
