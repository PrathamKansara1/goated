import React from "react";
import "./Terms.css";
import Vector from '../../assets/Vector.png'

const Terms = () => {
  return (
    <div className="terms_container">
      <div className="frame_11">
        <div className="frame_11_title">
          <span>Welcome to Goated</span>
        </div>
        <div className="frame_11_description">
          <span>We’re glad to have you onboard with us</span>
        </div>
      </div>
      <div className="group_1829">
        <div className="rectangle_140X active"></div>
        <div className="rectangle_140X"></div>
        <div className="rectangle_140X"></div>
      </div>
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
            <input type="checkbox" name="agree" id="" />
            <p className="question">I agree to Vertex’s  <a href="/">Terms of Service </a></p>
          </div>
        </div>
        <div className="rectangle_13">
          <span>Continue to Goated</span>
        </div>
      </div>
      <div className="zigzag_vertical">
        <img src={Vector} alt="" />
        <img src={Vector} alt="" />
      </div>
    </div>
  );
};

export default Terms;
