import React from "react";
import { assets } from "../../assets/assets";

import "./Logo.css";

const Logo = ({ isFooter }) => {
  const src = isFooter ? assets.footerblack_logo : assets.bggreen_logo;
  return (
    <>
      <img className={`logo`} src={src} alt={"Raindrop's Indian Restaurant"} />
    </>
  );
};

export default Logo;
