import React from "react";
import { SideBar } from "../assets/styles/sidebarStyle.js";
import logo from "../assets/images/logo-render.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faHandshake,
  faHome,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

function Side() {
  return (
    <SideBar>
      <div className="body">
        <div className="head">
          <div className="home-button">
            <img id="home-logo" src={logo} />
          </div>
        </div>
        <div className="content">
          <a href="#home">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home
          </a>
          <a href="#habilidades">
            <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon>Skills
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon> About
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>Contact
          </a>
        </div>
      </div>
    </SideBar>
  );
}

export default Side;
