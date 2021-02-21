import React from "react";
import { NavBar } from "../assets/styles/navStyle";

function Nav() {
  return (
    <NavBar>
      <div className="header">
        <div className="nav-bar">
          <div className="home-button">
            <div id="home-logo"></div>
            <label id="label-logo" htmlFor="#home-logo">
              <span className="nav-logo-title">Guilherme Pimenta </span>
              <span className="nav-logo-subtitle"> Front end Dev.</span>
            </label>
          </div>

          <div className="box-menu-button">
            <div className="menu-icon-box">
              <div className="menu-icon-bar" />
              <div className="menu-icon-bar-off" />
              <div className="menu-icon-bar" id="mid-bar" />
              <div className="menu-icon-bar-off" />
              <div className="menu-icon-bar" />
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
}

export default Nav;
