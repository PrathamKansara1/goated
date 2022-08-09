import React from "react";
import Box from "../Box";
import "./Balance.css";
import BalanceContent from "./BalanceContent";
import Logo from "../../assets/HomePage/balanceLogo.png";
import Arrow from "../../assets/HomePage/balanceArrow.png";

const Balance = (props) => {
  return (
    <Box customStyle={props.customStyle}>
        <BalanceContent logoType="img" logo={Logo} text="GOAT BALANCE" value="10,230" />
        <BalanceContent logoType="img" logo={Arrow} text="STAKED" value="10.3K" />
    </Box>
  );
};

export default Balance;
