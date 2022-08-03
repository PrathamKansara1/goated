import React from 'react'
import './Intrests.css'

const Intrests = (props) => {
  return (
    <div className={props.status === "selected" ? "intrest_card active" : "intrest_card"}>
        <div className="intrest_svg">
          <img src={props.intrest_svg} alt="" />
        </div>
        <div className="intrest_name">
          <span>{props.name}</span>
        </div>
        <div className="add_intrest_btn"><img src={props.status_svg} alt="" /></div>
    </div>
  )
}

export default Intrests