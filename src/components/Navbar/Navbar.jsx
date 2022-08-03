import React from "react";
import "./Navbar.css";
import mainLogo from "../../assets/mainlogo.svg";
import jonathanSmith from "../../assets/jonathansmith.svg";
import expandsvg from "../../assets/expandsvg.svg"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={mainLogo} alt="" />
      </div>
      <div className="jonathan_smith">
        <div className="jonathan_smith_image">
          <img src={jonathanSmith} alt="" />
        </div>
        <div className="jonathan_smith_name">
          <span>Jonathan Smith</span>
        </div>
        <div className="jonathan_smith_expand">
          <img src={expandsvg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
