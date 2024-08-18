import React, { useContext, useState } from "react";
import "./Navbar.css";

import { BsSearchHeart } from "react-icons/bs";
import { BiSolidDish } from "react-icons/bi";

import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src="#" alt="RainDrops Fine Dining" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`home ${menu === "home" ? "active" : ""} menu_item`}
        >
          home
        </Link>
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default behavior
            setMenu("home"); // Set the menu state to "home"
            window.location.href = "/#explore-menu"; // Navigate to the anchor
          }}
          className={`menu ${menu === "menu" ? "active" : ""} menu_item`}
        >
          menu
        </Link>

        <Link
          to="/contactus"
          onClick={() => setMenu("contact")}
          className={`contact ${menu === "contact" ? "active" : ""} menu_item`}
        >
          contact us
        </Link>
      </ul>

      <div className="navbar-right">
        {/* work: have to make the search bar work */}
        <a href="#explore-menu">
          <BsSearchHeart className="search_icon" title="Search" />
        </a>

        <Link to="/cart" className="navbar-search-icon">
          <BiSolidDish className="cart_icon" title="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
