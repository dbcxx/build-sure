import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import Button1 from "../Button1";

const Header = () => {
  return (
    <header id="welcome-section">
      <div className="container">
        <div className="typing">
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "Ensure buildings are safe for habiting",
              1000,
              "Ensure buildings are safe for Sex",
              2000,
              "Ensure buildings are safe for Ageing",
              3000,
              "Ensure buildings are safe for Death",
              2000,
            ]}
            speed={20} // Custom Speed from 1-99 - Default Speed: 40
            style={{}}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </div>
        <div className=" text-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </div>
        <div className="button-call">
          <span>Join Us Today </span>
            {/* <Button1 variant={"signup"}>Signup Now</Button1> */}
            <button type = "button" className = "btn-login">Login </button>
            <button type = "button" className = "btn-signup">Signup </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
