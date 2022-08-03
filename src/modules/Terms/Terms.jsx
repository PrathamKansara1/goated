import React, { useState } from "react";
import "./Terms.css";
import Vector from '../../assets/Vector.png'
import SliderTop from "../../components/SliderTop";
import {Link} from 'react-router-dom'

const Terms = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (e) => {
    setChecked(e.target.checked)
  }
  return (
    <div className="terms_container">
      <SliderTop title="Welcome to Goated" description="We’re glad to have you onboard with us" slide="first" />
      <div className="rectangle_1392">
        <div className="group_51">
          <div className="rectangle_420">
            <span>
              Introduction <br /> These Website Standard Terms and Conditions
              written on this webpage shall manage your use of our website,
              Webiste Name accessible at Website.com. <br />
              <br /> These Terms will be applied fully and affect to your use of
              this Website. By using this Website, you agreed to accept all
              terms and conditions written in here. You must not use this
              Website if you disagree with any of these Website Standard Terms
              and Conditions. Minors or people below 18 years old are not
              allowed to use this Website.
            </span>
          </div>
          <div className="ask_question">
            <input type="checkbox" name="agree" id="agree" onChange={handleChange}/>
            <p className="question">I agree to Vertex’s  <a href="/">Terms of Service </a></p>
          </div>
        </div>
        <Link to={checked === true ? "/preference" : "/"} className="rectangle_13">
          <span>Continue to Goated</span>
        </Link>
      </div>
      <div className="zigzag_vertical">
        <img src={Vector} alt="" />
        <img src={Vector} alt="" />
      </div>
    </div>
  );
};

export default Terms;
