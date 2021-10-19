import React from "react";
import logo from "./jamazon.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Jamazon" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne"> Hello Guest </span>
          <span className="header__optionLineTwo"> Sign In </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Returns </span>
          <span className="header__optionLineTwo"> & Orders </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Your </span>
          <span className="header__optionLineTwo"> Prime </span>
        </div>
      </div>
    </div>
  );
}

export default Header;