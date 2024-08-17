import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer bg_img_check">
      <div className="footer_content">
        <div className="logo">
          {/* <Logo /> */}
          <Link to="/">
            <img className="logo" src="#" alt="RainDrops Fine Dining" />
          </Link>
        </div>

        <div className="contact-details">
          <h2>Contact Us:</h2>
          <div className="flex_col">
            <a href="tel:+">- Phone: +1 123-456-7890</a>
            <a href="">
              - Address: xxxx Fairmount St, Philadelphia, PA - 19104
            </a>
          </div>
        </div>

        <div className="online_delivery">
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
