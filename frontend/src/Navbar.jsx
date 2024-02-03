import React, { useState } from "react";
import navbar from "./css/navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>My Logo</h1>
        </div>
        <div className="searchinput">
          <input placeholder="search your product" type="text" />
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </div>
        <div className="rightbox_navbar">
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          <FontAwesomeIcon className="icon" icon={faUser} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
