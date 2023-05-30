import React from "react";
import Wrapper from "../assets/Wrappers/Works";
import projectz from "../utils/index";
const Works = () => {
  return (
    <Wrapper>
      <div className="works-h2-container">
        <h2>Projects</h2>
      </div>

      <div className="works-projects-info-container">
        {projectz.map((item) => (
          <div className="img-info-container" key={item.id}>
            <div className="project-img-container">
              <img className="project-img" src={item.img} alt={item.name} />
            </div>
            <div className="project-info">
              <span className="project-span">{item.span}</span>
              <h3>{item.name}</h3>
              <p>{item.info}</p>
              <div className="tech-stack-container">
              {item.techstack.map((imgs) => (
                  <img className="tech-img" src={imgs} alt="tech stack" />
              ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Works;
