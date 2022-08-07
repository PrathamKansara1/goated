import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Mainpage from "../../components/MainPage/Mainpage";
import Navbar from "../../components/Navbar";
import RightMainBox from "../../components/RightMainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Mainpage>
        <Navbar main_pages="true" />
        <div className="side_content">
          <Sidebar />
          <div className="home_page">
            <div className="home_upper">
              <Carousel />
              <RightMainBox />
            </div>
          </div>
        </div>
      </Mainpage>
    </>
  );
};

export default Homepage;
