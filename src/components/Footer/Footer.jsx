import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer bg_img_check">
      <div className="footer_content">
        <div className="logo">
          <Link to="/">
            <Logo isFooter={true} />
          </Link>
        </div>

        <div className="contact-details">
          <h2>Contact Us:</h2>
          <div className="flex_col">
            <a href="tel:+12154490040">- Phone: +1 215-449-0040</a>
            <a href="https://maps.app.goo.gl/sQcb1ocjmsuMcBR57" target="_blank">
              - Address: 2749 N 47th Street, Philadelphia, PA - 19131
            </a>
          </div>
        </div>

        <div className="online_delivery" id="order_online">
          <h2>Order Online:</h2>
          <div className="flex_row">
            <a href="">
              <img
                src={assets.uber_eats_img}
                alt="order on uber eats"
                title="Order on Uber Eats"
                className="order_online_img"
              />
            </a>

            <a href="">
              <img
                src={assets.grub_hub_img}
                alt="order on Grubhub"
                title="Order on Grubhub"
                className="order_online_img"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
