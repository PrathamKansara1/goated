import React from "react";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel/Carousel";
import Mainpage from "../../components/MainPage/Mainpage";
import Navbar from "../../components/Navbar";
import RightMainBox from "../../components/RightMainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Homepage.css";
import Trending from "../../assets/HomePage/Trending.png";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";
import Data from "../../data/Data.json";

const Homepage = () => {
  const cardData = Data.Cards;
  return (
    <>
      <Mainpage>
        <Navbar main_pages="true" />
        <div className="side_content">
          <Sidebar />
          <div className="home_page">
            <div className="home_upper">
              <Carousel />
              <RightMainBox user={true}/>
              
            </div>
            <div className="home_middle">
              <div className="home_middle_left">
                <img src={Trending} alt="" />
                <HomePageTitle
                  title="All Markets"
                  customStyle={{ fontSize: "20px" }}
                />
              </div>
              <div className="Home_middle_right"></div>
            </div>
            <div className="home_lower">
              {cardData.map((item, index) => (
                <Card item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Mainpage>
    </>
  );
};

export default Homepage;
