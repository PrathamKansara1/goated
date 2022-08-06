import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import {
  MdSportsBasketball,
  MdSportsFootball,
  MdSportsCricket,
  MdOutlineLocalFireDepartment,
  MdSportsTennis,
} from "react-icons/md";
import { RiBoxingLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import Content from "./Content";
export const Sidebar = () => {
  const sidebar_options = [
    {
      svg: <MdOutlineLocalFireDepartment />,
      name: "Popular",
    },
    {
      svg: <MdSportsFootball />,
      name: "Football",
    },
    {
      svg: <MdSportsBasketball />,
      name: "Basketball",
    },
    {
      svg: <MdSportsTennis />,
      name: "Tennis",
    },
    {
      svg: <SiYoutubegaming />,
      name: "Gaming",
    },
    {
      svg: <RiBoxingLine />,
      name: "Boxing",
    },
    {
      svg: <GiFullMotorcycleHelmet />,
      name: "Racing",
    },
    {
      svg: <MdSportsCricket />,
      name: "Cricket",
    },
  ];
  return (
    <div className="sidebar_main">
      <div className="sidebar">
        {sidebar_options.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </div>
      <div className="sidebar_content">
        <Content />
      </div>
    </div>
  );
};

export default Sidebar;
