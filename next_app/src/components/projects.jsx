import React from "react";
import { Projects } from "../assets/styles/projectsStyles";
import project1 from "../assets/images/genshin_dmg_home.png";

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
          <div className="card">
            <h1>UnipHC</h1>
            <h3>lorem ipsul dorem dormem lore ipsum</h3>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </Projects>
  );
}
export default Projetos;
