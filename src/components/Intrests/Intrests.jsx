import React, { useState } from 'react'
import './Intrests.css'
import Add from "../../assets/IntrestSvg/addIntrest.svg";
import Done from "../../assets/IntrestSvg/Done.svg";

const Intrests = (props) => {
  const [statusCheck,setStatusCheck] = useState("unselected");
  const [checkSvg , setCheckSvg] = useState(Add)

  const status_toggle = () => {
    if(statusCheck === "selected"){
      setStatusCheck("unselected")
      setCheckSvg(Add)
    } 
    if(statusCheck === "unselected"){
      setStatusCheck("selected")
      setCheckSvg(Done)
    }
  }
  return (
    <div className={statusCheck === "selected" ? "intrest_card active" : "intrest_card"} onClick={() => status_toggle()}>
        <div className="intrest_svg">
          <img src={props.intrest_svg} alt="" />
        </div>
        <div className="intrest_name">
          <span>{props.name}</span>
        </div>
        <div className="add_intrest_btn"><img src={checkSvg} alt="" /></div>
    </div>
  )
}

export default Intrests