import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="header-contents">
        <h1>Your Indian Food in Philadelphia</h1>
        <p>
          Discover the authentic flavors of India right here in Philadelphia.
          Our diverse menu features a delectable array of dishes, from aromatic
          curries to sizzling tandoori specials, all crafted with the finest
          ingredients and traditional culinary expertise. Whether you're craving
          a spicy treat or a comforting classic, we're here to satisfy your
          appetite and elevate your dining experience.
        </p>
        <p>
          At Raindrop's Indian Restaurant, we take pride in bringing you the
          rich heritage of Indian cuisine, offering dine-in, take-away,
          <a href="#order_online"> online delivery </a> and catering options to
          suit your needs. Explore our menu and find your new favorite dish
          today!
        </p>
        <a className="button" href="#explore-menu">
          View Menu
        </a>
      </div>
    </section>
  );
};

export default Header;
