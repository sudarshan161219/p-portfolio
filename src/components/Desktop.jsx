import React from "react";
import Wrapper from "../assets/Wrappers/Desktop";
import projectz from "../utils";
import pattern from "/img/pattern.png";
import { FiGithub, FiLink2 } from "react-icons/fi";

const Desktop = () => {
  return (
    <Wrapper>
      <div className="desktop-heading">
        <h2>Projects</h2>
      </div>
      <div className="desktop-works-projects-info-container">
        {projectz.map((item) => (
          <div className="img-info-container" key={item.id}>
            <div className="project-info">
              <span className="project-span">{item.span}</span>
              <h3>{item.name}</h3>
              <p>{item.info}</p>



              <div className="links">
                <button className="button">
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <a className="button_text" href="">
                      Source Code
                      <FiGithub className="link-icon" />
                    </a>
                  </span>
                </button>

                <button className="button">
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <a className="button_text" href="">
                      Live Site
                      <FiLink2 className="link-icon" />
                    </a>
                  </span>
                </button>
              </div>

              <div className="stack-container">
                {/* <span>Tech stack</span> */}
                <div className="tech-stack-container">
                  {item.techstack.map((imgs, idx) => (
                    <img
                      key={idx}
                      className="tech-img"
                      src={imgs}
                      alt="tech stack"
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* img */}
            <div className="project-img-container">
              <img className="project-img" src={item.img} alt={item.name} />
              <img className="pattern" src={pattern} alt="pattern" />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Desktop;
