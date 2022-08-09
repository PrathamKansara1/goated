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

const Account = () => {
  const PostTrades = Data.PostTrades;
  const ActiveOrders = Data.ActiveOrders;
  return (
    <Mainpage>
      <Navbar main_pages="true" active="Account" />
      <div className="side_content">
        <Sidebar />
        <MainContainer>
          <div className="account_first">
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
            <button className="self_exclude" >
              <span>Self Exclude</span>
            </button>
          </div>
        </MainContainer>
      </div>
    </Mainpage>
  );
};

export default Account;
