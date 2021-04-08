import React from "react";
import { HomePage } from "../assets/styles/homeStyles.js";
import Habilidades from "./skills.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

// import backgroundVideo from "../assets/video/FlyingRedKeys.mp4";
// import homeBackground from "../assets/images/background-img.png";

console.log(process.env.NODE_ENV);

function Home() {
  return (
    <HomePage>
      <div className="home-bg-gradient"></div>
      <ReactPlayer
        className="background-video"
        loop="true"
        muted="true"
        width="1920px"
        height="1080px"
        playing="true"
        controls="false"
        url="https://youtu.be/ae6_Nq4AWDA"
      ></ReactPlayer>
      <div className="home-body">
        <input id="menu-expand" type="checkbox" />
        <label for="menu-expand">
          <span>
            <FontAwesomeIcon id="first-arrow" icon={faAngleRight} />
            <FontAwesomeIcon id="second-arrow" icon={faAngleRight} />
          </span>
        </label>
        <div className="menu">
          <h1>Logo</h1>
        </div>

        <div className="row">
          <div className="wrapper">
            <div className="box-titles">
              <h5 className="title1">GUILHERME PIMENTA</h5>
              <h1 className="title2">Front End Developer</h1>
              <h3 className="title3">
                Together we will build modern interfaces for apps and websites.
                <br />
                Hands on and let's start to work.
              </h3>
            </div>
          </div>
        </div>
        <Habilidades></Habilidades>
      </div>
    </HomePage>
  );
}

export default Home;
