import React from "react";
import { MdMenu } from "react-icons/md";
import CardDescription from "../../components/CardDescription/CardDescription";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";
import Icons from "../../components/Icons";
import LightText from "../../components/LightText";
import "./Markets.css";
import Madrid from "../../assets/AccountPage/Madrid.png";

const MarketCard = ({ customStyle }) => {
  const description = [
    {
      desc_value: "0.79",
      desc_title: "Madrid Wins",
    },
    {
      desc_value: "0.79",
      desc_title: "Barcelona Wins",
    },
    {
      desc_value: "0.79",
      desc_title: "Match Drawn",
    },
  ];
  return (
    <div className="market_card" style={customStyle}>
      <div className="market_card_upper">
        <div className="market_card_title">
          <Icons
            icon={<MdMenu color="var(--secondary)" />}
            customStyle={{ fontSize: "15px" }}
          />
          <HomePageTitle
            title="Outcomes"
            customStyle={{ fontSize: "20px", fontWeight: "700" }}
          />
        </div>
        <div className="market_card_value">
          <LightText
            lightText="3 Outcomes"
            customStyle={{
              fontSize: "14px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          />
        </div>
      </div>
      <div
        className="market_card_lower"
        style={{ backgroundColor: "#121a21" , padding:"15px 0"}}
      >
        {description.map((item) => (
          <CardDescription desc={item} svg={Madrid} />
        ))}
      </div>
    </div>
  );
};

export default MarketCard;
