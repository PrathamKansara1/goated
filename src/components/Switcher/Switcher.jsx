import React, { useState } from "react";
import { MdArrowDownward, MdArrowUpward, MdBook } from "react-icons/md";
import Balance from "../Balance";
import Deposit from "../Deposit/Deposit";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import SwitcherItem from "../SwitcherItem";
import Withdraw from "../Withdraw";

const Switcher = () => {
  const [activeSwitcher, setActiveSwitcher] = useState("Balance");
  function activeSwitcherHandler(item) {
    setActiveSwitcher(item);
  }
  return (
    <div className="switchers">
      <div className="switcher_options">
        <SwitcherItem
          icon={<MdBook />}
          onclick={() => {
            activeSwitcherHandler("Balance");
          }}
          name="balance"
          active={activeSwitcher === "Balance" ? true : false}
        />
        <SwitcherItem
          icon={<MdArrowDownward />}
          onclick={() => {
            activeSwitcherHandler("Deposit");
          }}
          name="deposit"
          active={activeSwitcher === "Deposit" ? true : false}
        />
        <SwitcherItem
          icon={<MdArrowUpward />}
          onclick={() => {
            activeSwitcherHandler("Withdraw");
          }}
          name="withdraw"
          active={activeSwitcher === "Withdraw" ? true : false}
        />
      </div>
      <div className="switcher_content">
        {activeSwitcher === "Balance" ? (
          <Balance customStyle={{ marginTop: "0px" }} />
        ) : activeSwitcher === "Deposit" ? (
          <Deposit customStyle={{ marginTop: "0px" }} />
        ) : activeSwitcher === "Withdraw" ? (
          <Withdraw customStyle={{ marginTop: "0px" }} />
        ) : (
          <HomePageTitle
            text="Something Went Wrong"
            customStyle={{ fontSize: "18px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Switcher;
