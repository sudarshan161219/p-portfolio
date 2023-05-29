import React from "react";
import Wrapper from "../assets/Wrappers/About";
import svg2 from "../../public/img/svg-2.svg";
const About = () => {
  return (
    <Wrapper>
      <div className="mobile-conyainer">
        <div className="heading-container">
          <h2>What I do</h2>
        </div>

        <div className="img-info-container">
          <div className="img-info">
            <img className="about-img" src={svg2} alt="developer" />
          </div>
          <div className="para-container">
            <strong>Delevoper</strong>
            <p>
              I develop beautiful and powerful websites for modern businesses.
              Any business today needs a website that wins customers’ trust and
              helps you do your business well. I make sure your website is up to
              that standard.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
