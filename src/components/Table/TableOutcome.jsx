import React from "react";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import Active from "../../assets/AccountPage/active.png";

const TableOutcome = ({ logo, text, active }) => {
  return (
    <>
      <div className="table_outcome">
        <div className="left">
          <img src={logo} alt="" />
          <HomePageTitle
            title={text}
            customStyle={{ fontWeight: "500", fontSize: "14px" }}
          />
        </div>
        {active ? <img src={Active} alt="" /> : null}
      </div>
    </>
  );
};

export default TableOutcome;
