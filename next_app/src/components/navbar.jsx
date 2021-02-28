import React from "react";
import { NavBar } from "../assets/styles/navStyle";
import logo from "../assets/images/logo.png";

function Nav() {
  return (
    <NavBar>
      <div className="header">
        <div className="nav-bar">
          <div className="home-button">
            <img id="home-logo" src={logo} />
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
