import React from 'react'
import Wrapper from '../assets/Wrappers/Mobile'
import projectz from "../utils/index";
import { FiGithub, FiLink2 } from "react-icons/fi";

const Mobile = () => {
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
  
              <div className="stack-container">
                <span>Tech stack used in this project</span>
                <div className="tech-stack-container">
                  {item.techstack.map((imgs, idx) => (
                    <img  key={idx} className="tech-img" src={imgs} alt="tech stack" />
                  ))}
                </div>
              </div>

              <div className="links">
             <a href="">Source Code<FiGithub className="link-icon" /></a>   
             <a href="">Live Site<FiLink2 className="link-icon" /></a>   
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Mobile