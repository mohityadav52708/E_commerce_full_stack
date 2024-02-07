import React, { useState } from "react";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cartCount, setCartCount] = useState(0); // State to track number of items in cart

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    // Implement logic to add item to cart
    // For example, you can increment the cart count
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>My Logo</h1>
        </div>
        <div className="searchinput">
          <input
            placeholder="Search your product"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FontAwesomeIcon className="icon" id="search" icon={faSearch} />
        </div>

        <div className="rightbox_navbar">
          {/* Shopping cart icon with dynamic count */}
          <div className="cart-icon" onClick={handleAddToCart}>
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <FontAwesomeIcon className="icon" icon={faUser} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
