import React, { useState } from "react";
import "./Navbar.scss";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="Navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="nav-menus">
        <li
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="menu-icons">
        <i className="ri-search-line"></i>
        <div className="cart">
          <i className="ri-shopping-bag-4-line"></i>
          <div className="dot">10</div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
