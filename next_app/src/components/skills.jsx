import React from "react";
import { Skills } from "../assets/styles/skillsStyles.js";
import skill_react from "../assets/images/skills-curriculo-react.png";
import skill_vue from "../assets/images/skills-curriculo-vue.png";
import skill_flutter from "../assets/images/skills-curriculo-flutter.png";
import skill_javascript from "../assets/images/skills-curriculo-javascript.png";
import skill_html from "../assets/images/skills-curriculo-html.png";
import skill_sass from "../assets/images/skills-curriculo-sass.png";
import skill_english from "../assets/images/skills-curriculo-english.png";

function Habilidades() {
  return (
    <Skills id="habilidades">
      <div className="wrapper">
        <div className="section-title-row">
          <h1 className="section-title">
            {"<"} Skills<span className="blink-caret">|</span>
          </h1>

          <div className="section-background-line"></div>
        </div>

        <div className="skills-section">
          <div className="skills-box">
            <img className="skills-shadow" src={skill_react} />
            <img className="skills" src={skill_react} />
            <p>React/Native</p>
          </div>

          <div className="skills-box">
            <img className="skills-shadow" src={skill_vue} />
            <img className="skills" src={skill_vue} />
            <p>Vue Js</p>
          </div>

          <div className="skills-box">
            <img className="skills-shadow" src={skill_flutter} />
            <img className="skills" src={skill_flutter} />
            <p>Flutter</p>
          </div>

          <div className="skills-box">
            <img className="skills-shadow" src={skill_javascript} />
            <img className="skills" src={skill_javascript} />
            <p>Javascript</p>
          </div>

          <div className="skills-box">
            <img className="skills-shadow" src={skill_html} />
            <img className="skills" src={skill_html} />
            <p>Html 5</p>
          </div>

          <div className="skills-box">
            <img className="skills-shadow" src={skill_sass} />
            <img className="skills" src={skill_sass} />
            <p>Sass</p>
          </div>

          <div className="skills-box">
            <img className="skills-shadow" src={skill_english} />
            <img className="skills" src={skill_english} />
            <p>English</p>
          </div>
        </div>
      </div>
    </Skills>
  );
}

export default Habilidades;
