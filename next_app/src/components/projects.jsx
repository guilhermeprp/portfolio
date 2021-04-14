import React from "react";
import { Projects } from "../assets/styles/projectsStyles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import genshin from "../assets/images/genshin_dmg_home.png";
import uniphc from "../assets/images/uniphc.png";

function Projetos() {
  return (
    <Projects>
      <div className="wrapper">
        <div className="section-title-row">
          <h1 className="section-title">
            {"<"} Projects<span className="blink-caret">|</span>
          </h1>

          <div className="section-background-line"></div>
        </div>
        <div className="cards-grid">
          {/* // * ROW GENSHIN */}
          <div className="row1">
            <div className="card order-2">
              <img id="genshin" src={genshin} />
            </div>
            <div className="card order-1">
              <div>
                <strong>Genshin DMG</strong>
                <p>
                  Site created for the a game called Genshin Impact, this site
                  was maded to calculate your character damage, preventing
                  players to waste money on weak characters.
                </p>
                <a href="">
                  <strong>
                    Site
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </strong>
                </a>
              </div>
            </div>
          </div>

          {/* // * ROW UNIP */}
          <div className="row2">
            <div className="card order-1">
              <img id="uniphc" src={uniphc} />
            </div>
            <div className="card order-2">
              <div>
                <strong>UnipHC</strong>
                <p>
                  Unip complementary hours is an app that help the university
                  student to manage they hours and tasks.
                </p>
                <a href="">
                  <strong>
                    GitHub
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Projects>
  );
}
export default Projetos;
