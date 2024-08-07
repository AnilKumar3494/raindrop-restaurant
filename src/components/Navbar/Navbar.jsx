import React, { useContext, useState } from "react";
import "./Navbar.css";

import { BsSearchHeart } from "react-icons/bs";
import { BiSolidDish } from "react-icons/bi";

import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "active" : ""} menu_item`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""} menu_item`}
        >
          menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" ? "active" : ""} menu_item`}
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right">
        {/* work: have to make the search bar work */}
        <div>
          <BsSearchHeart className="search_icon" title="Search" />
        </div>

        <Link to="/cart" className="navbar-search-icon">
          <BiSolidDish className="cart_icon" title="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>

        {/* <button onClick={() => setShowLogin(true)}>sign in</button> */}
      </div>
    </div>
  );
};

export default Navbar;
