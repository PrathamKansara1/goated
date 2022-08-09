import React from "react";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel/Carousel";
import Mainpage from "../../components/MainPage/Mainpage";
import Navbar from "../../components/Navbar";
import RightMainBox from "../../components/RightMainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Homepage.css";
import Data from "../../data/Data.json";
import MainContainer from "../../components/MainContainer/MainContainer";
import MiddleTitle from "../../components/MiddleTitle/MiddleTitle";

const Homepage = () => {
  const cardData = Data.Cards;
  return (
    <>
      <Mainpage>
        <Navbar main_pages="true" active="Home" />
        <div className="side_content">
          <Sidebar customStyle={{ flex: "2" }} />
          <MainContainer customStyle={{ flex: "8" }}>
            <div className="home_upper">
              <Carousel />
              <RightMainBox user={true} />
            </div>
            <MiddleTitle title="All Markets" />
            <div className="home_lower">
              {cardData.map((item, index) => (
                <Card item={item} key={index} />
              ))}
            </div>
          </MainContainer>
        </div>
      </Mainpage>
    </>
  );
};

export default Homepage;
