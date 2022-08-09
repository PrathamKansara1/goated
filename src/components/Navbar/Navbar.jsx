import React, { useRef, useState } from "react";
import "./Navbar.css";
import mainLogo from "../../assets/mainlogo.svg";
import jonathanSmith from "../../assets/jonathansmith.svg";
import expandsvg from "../../assets/expandsvg.svg";
import Goated from "../../assets/GOATED.png";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/fundinglogo.svg";

const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState(props.active)
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
              <div ref={closeref} className="close none" onClick={closeHandler}>
                <MdClose />
              </div>
                </>
              ) : []}
              <img src={Goated} alt="" />
            </div>
            <div className="right_nav">
              <ul className="right_nav_links">
                <Link to="/" className={props.active === "Home" ? "active" : ""}>
                  Home
                </Link>
                <Link to="/account" className={props.active === "Account" ? "active" : ""}>Account</Link>
                <Link to="/" className={props.active === "MyBets" ? "active" : ""}>My Bets</Link>
                <Link to="/" className={props.active === "FAQ" ? "active" : ""}>FAQ</Link>
              </ul>
            </div>
          </div>
          <div className="jonathan_smith">
            <div className="jonathan_smith_image">
              <img src={Logo} alt="" />
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
      )}
    </>
  );
};

export default Navbar;
