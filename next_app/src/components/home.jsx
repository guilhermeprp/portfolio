import React from "react";
import ReactPlayer from "react-player";
import { HomePage } from "../assets/styles/homeStyles.js";
// import homeBackground from "../assets/images/background-img.png";
// import backgroundVideo from "../assets/video/background-video.mp4";

console.log(process.env.NODE_ENV);

function Home() {
  return (
    <HomePage>
      <div className="home-body">
        <ReactPlayer
          className="background-video"
          loop="true"
          muted="true"
          width="1920px"
          height="1080px"
          playing="true"
          controls="false"
          url="https://www.youtube.com/watch?v=ae6_Nq4AWDA&t"
        ></ReactPlayer>

        <div className="home-bg-gradient"></div>
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
      </div>
    </HomePage>
  );
}

export default Home;
