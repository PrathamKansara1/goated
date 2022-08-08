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
import Data from "../../data/Data.json";
export const Sidebar = () => {
  const content = Data.Fixtures[0].fixture_data;
  const Fixtures = Data.Fixtures;
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
          <SidebarItem icon={item.svg} name={Fixtures[index].fixture_title} key={index} />
        ))}
      </div>
      <div className="sidebar_content">
        {content.map((item,index) => (
          <Content item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
