import React from "react";
import { MdBook } from "react-icons/md";
import AccountTitles from "../../components/AccountTitles/AccountTitles";
import BalanceContent from "../../components/Balance/BalanceContent";
import Box from "../../components/Box";
import MainContainer from "../../components/MainContainer/MainContainer";
import Mainpage from "../../components/MainPage/Mainpage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Switcher from "../../components/Switcher";
import "./Account.css";
import ChartPng from "../../assets/AccountPage/chart.png";
import FundingLogo from "../../assets/fundinglogo.svg";
import Table from "../../components/Table";
import Data from "../../data/Data.json";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";
import Button from "../../components/Button";

const Account = () => {
  const PostTrades = Data.PostTrades;
  const ActiveOrders = Data.ActiveOrders;
  const active = true;
  return (
    <Mainpage>
      <Navbar main_pages="true" active="Account" />
      <div className="side_content">
        <Sidebar />
        <MainContainer>
          <div className="account_first">
            {active ? (
              <>
                <div className="account_first_left">
                  <AccountTitles
                    whiteText="Your account"
                    lightText="Your account overview here"
                  />
                  <Box customStyle={{ width: "550px", height: "180px" }}>
                    <div className="account_box">
                      <BalanceContent
                        logoType="svg"
                        logo={<MdBook />}
                        text="Staked"
                        value="12,303"
                        customStyle={{ border: "none" }}
                      />
                    </div>
                    <div className="account_box">
                      <img src={ChartPng} alt="" />
                    </div>
                    <div className="account_box">
                      <BalanceContent
                        logoType="svg"
                        logo={<MdBook />}
                        text="GOAT BALANCE"
                        value="92,292.20"
                        customStyle={{ border: "none" }}
                      />
                    </div>
                    <div className="account_box">
                      <BalanceContent
                        logoType="Png"
                        logo={FundingLogo}
                        text="FTX BALANCE"
                        value="1,29,3939.39"
                        customStyle={{ border: "none" }}
                      />
                    </div>
                  </Box>
                </div>
                <div className="account_second_left">
                  <Switcher active="Two" />
                </div>
              </>
            ) : (
              <>
                <div className="left_most">
                  <Switcher
                    customStyle={{ marginTop: "0px", width: "750px" }}
                    active="Three"
                  />
                </div>

                <div className="right_most">
                  <Box customStyle={{width: "300px",height: "350px",marginTop: "0",backgroundColor : "var(--secondary)"}} >
                    <HomePageTitle title="Discover New Markets To Trade" customStyle={{fontSize:"27px",fontWeight: "700", margin: "20px 15px"}} />
                    <Button navigate="/" text="Back To Trading" customStyle={{backgroundColor:"white",width: "270px",height: "30px",color:"var(--secondary) ",margin:"30px 15px"}} />
                  </Box>
                </div>
              </>
            )}
          </div>
          <div className="account_second">
            <div className="account_second_upper">
              <AccountTitles
                whiteText="Active Orders"
                lightText="Your previous Trades wil appear here"
              />
            </div>
            <div className="account_second_lower">
              <Table content={ActiveOrders} />
            </div>
          </div>
          <div className="account_third">
            <div className="account_third_upper">
              <AccountTitles
                whiteText="Post Trades"
                lightText="Your previous Trades wil appear here"
              />
            </div>
            <div className="account_third_lower">
              <Table content={PostTrades} />
            </div>
          </div>
          <div className="account_fourth">
            <AccountTitles
              whiteText="Self Exclude"
              lightText="Self exclude yourself from Goated’s terms and conditions apply, this is just some text"
            />
            <button className="self_exclude">
              <span>Self Exclude</span>
            </button>
          </div>
        </MainContainer>
      </div>
    </Mainpage>
  );
};

export default Account;
