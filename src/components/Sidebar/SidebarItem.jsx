import React, { useState } from "react";


const SidebarItem = ({icon,name}) => {
  const [check_active, setCheck_active] = useState(false);

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
    >{icon} 
      <span>{name.length > 8 ? name.slice(0,6) + ".." : name}</span>
    </div>
  );
};

export default SidebarItem;
