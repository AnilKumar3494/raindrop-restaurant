import React, { useContext, useState } from "react";
import "./Navbar.css";

import { BsSearchHeart } from "react-icons/bs";
import { BiSolidDish } from "react-icons/bi";

import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);
  const { taxRate, totalAmount, totalWithTax } = getTotalCartAmount();

  // Function to handle scrolling
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <Logo />
      </Link>

      <ul className="navbar_menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`home ${menu === "home" ? "active" : ""} menu_item`}
        >
          Home
        </Link>
        <Link
          to="/"
          onClick={() => {
            setMenu("menu");
            scrollToElement("food-display");
          }}
          className={`menu ${menu === "menu" ? "active" : ""} menu_item`}
        >
          Menu
        </Link>

        <Link
          to="/contactus"
          onClick={() => setMenu("contact")}
          className={`contact ${menu === "contact" ? "active" : ""} menu_item`}
        >
          Contact
        </Link>
      </ul>

      <div className="navbar-right">
        {/* work: have to make the search bar work */}
        <Link
          to="/"
          onClick={() => {
            setMenu("menu");
            scrollToElement("explore-menu");
          }}
          className={`menu ${menu === "menu" ? "active" : ""} menu_item`}
        >
          <BsSearchHeart className="search_icon" title="Search" />
        </Link>
        <>
          <CartIcon />
        </>
      </div>
    </div>
  );
};

export default Navbar;

export const CartIcon = () => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);
  const { taxRate, totalAmount, totalWithTax } = getTotalCartAmount();

  return (
    <Link to="/cart" className="navbar-search-icon">
      <BiSolidDish
        onClick={() => {
          setMenu("cart_icon");
        }}
        className={`cart_icon ${menu === "menu" ? "active" : ""} menu_item`}
        title="Cart"
      />
      <div className={totalAmount > 0 ? "dot" : ""}></div>
    </Link>
  );
};
