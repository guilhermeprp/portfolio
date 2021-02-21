import React from "react";
import { HomePage } from "../assets/styles/homeStyles.js";

console.log(process.env.NODE_ENV);

function Home() {
  return (
    <HomePage>
      <img className="home-background"></img>
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
    </HomePage>
  );
}

export default Home;
