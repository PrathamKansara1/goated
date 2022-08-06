import React, { useState } from "react";


const SidebarItem = (props) => {
  const [check_active, setCheck_active] = useState(false);
  const item_name = props.item.name;

  const itemClickListener = () => {
    if(check_active === true){
        setCheck_active(false)
    } else {
        setCheck_active(true)
    }
  };
  
  return (
    <div
      className={check_active ? "active item_sidebar" : "item_sidebar"}
      onClick={itemClickListener}
    >{props.item.svg} 
      <span>{item_name.length > 8 ? item_name.slice(0,6) + ".." : item_name}</span>
    </div>
  );
};

export default SidebarItem;
