import React from "react";
import Wrapper from "../assets/Wrappers/Desktop";
import projectz from "../utils";
import pattern from "../../public/img/pattern.png";
import { FiGithub, FiLink2 } from "react-icons/fi";

const Desktop = () => {
  return (
    <Wrapper>
      <div className="desktop-works-projects-info-container">
        {projectz.map((item) => (
          <div className="img-info-container" key={item.id}>
            <div className="project-info">
              <span className="project-span">{item.span}</span>
              <h3>{item.name}</h3>
              <p>{item.info}</p>

              <div className="stack-container">
                {/* <span>Tech stack used in this project</span> */}
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

              <div className="links">
                <a href="">Source Code<FiGithub className="link-icon" /></a>   
             <a href="">Live Site<FiLink2 className="link-icon" /></a>   

                {/* <li class="icon github">
                  <span class="tooltip">Github</span>
                  <span>
                    <i class="fab fa-github"></i>
                  </span>
                </li> */}
              </div>
            </div>
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
