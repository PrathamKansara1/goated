import React from "react";
import LightText from "../LightText";
import "./SwitcherItem.css";

const SwitcherItem = ({icon,name,active,onclick}) => {
  return (
    <div onClick={onclick} className={active ? "switch_item active" : "switch_item"}>
      <div className="switch_icon">
        {icon}
      </div>
      <div className="switch_name">
        <LightText
          customStyle={{
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
          lightText={name}
        />
      </div>
    </div>
  );
};

export default SwitcherItem;
