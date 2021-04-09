import React from "react";
import { SideBar } from "../assets/styles/sidebarStyle.js";
import logo from "../assets/images/logo-render.png";

function Side() {
  return (
    <SideBar>
      <div className="body">
        <div className="head">
          <div className="home-button">
            <img id="home-logo" src={logo} />
          </div>
        </div>
      </div>
    </SideBar>
  );
}

export default Side;
