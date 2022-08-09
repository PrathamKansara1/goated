import React, { useRef } from "react";
import "./Navbar.css";
import {MainLogo} from '../../assets/ImpLogo/MainLogo'
import jonathanSmith from "../../assets/Png/Avatar.png";
import {Expand} from '../../assets/ImpLogo/Expand'
import Goated from "../../assets/Png/GOATED.png";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { Funding } from "../../assets/ImpLogo/Funding";

const Navbar = (props) => {
  const menuref = useRef();
  const closeref = useRef();

  const menuHandler = () => {
    menuref.current.classList.add("none");
    closeref.current.classList.remove("none");
  };
  const closeHandler = () => {
    menuref.current.classList.remove("none");
    closeref.current.classList.add("none");
  };
  return (
    <>
      {props.main_pages === "true" ? (
        <>
          <div className="navbar_main">
            <div className="left_nav">
              {window.innerWidth < 800 ? (
                <>
                  <div ref={menuref} className="menu" onClick={menuHandler}>
                    <MdMenu />
                  </div>
                  <div
                    ref={closeref}
                    className="close none"
                    onClick={closeHandler}
                  >
                    <MdClose />
                  </div>
                </>
              ) : (
                []
              )}
              <img src={Goated} alt="" />
            </div>
            <div className="right_nav">
              <ul className="right_nav_links">
                <Link
                  to="/"
                  className={props.active === "Home" ? "active" : ""}
                >
                  Home
                </Link>
                <Link
                  to="/account"
                  className={props.active === "Account" ? "active" : ""}
                >
                  Account
                </Link>
                <Link
                  to="/markets"
                  className={props.active === "Markets" ? "active" : ""}
                >
                  Markets
                </Link>
                <Link to="/" className={props.active === "FAQ" ? "active" : ""}>
                  FAQ
                </Link>
              </ul>
            </div>
          </div>
          <div className="jonathan_smith">
            <div className="jonathan_smith_image">
              <img src={<Funding/>} alt="" />
            </div>
            <div className="jonathan_smith_name">
              <span>Sign In with FTX</span>
            </div>
            <div className="jonathan_smith_expand">
              {/* <img src={expandsvg} alt="" /> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar">
            <img src={<MainLogo/>} alt="" />
          </div>
          <div className="jonathan_smith">
            <div className="jonathan_smith_image">
              <img src={jonathanSmith} alt="" />
            </div>
            <div className="jonathan_smith_name">
              <span>Jonathan Smith</span>
            </div>
            <div className="jonathan_smith_expand">
              <img src={<Expand/>} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
