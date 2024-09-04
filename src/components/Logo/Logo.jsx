import React from "react";
import { assets } from "../../assets/assets";

import "./Logo.css";

const Logo = () => {
  return (
    <>
      <img
        className="logo"
        src={assets.lightgreen_logo}
        alt="Raindrop's Indian Restaurant"
      />
    </>
  );
};

export default Logo;
