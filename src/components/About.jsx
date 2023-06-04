import React, { forwardRef } from "react";
import Wrapper from "../assets/Wrappers/About";
import svg3 from "/img/svg-3.svg";

const About =  forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      {/* mobile */}
      <div className="mobile-container">
        <div className="heading-container">
          <h2>What I do</h2>
          {/* <span className="mobile-heading-underline" ></span> */}
        </div>

        <div className="img-info-container">
          <div className="img-info">
            <img className="about-img" src={svg3} alt="developer" />
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

      {/* Desktop */}
      <div className="desktop-container">
        <div className="about-info-container">
          <div className="heading-container">
            <h2>What I do</h2>
            <span className="desktop-heading-underline"></span>
          </div>
          <div className="span">
            <strong> Delevoper</strong>
            <p>
              I develop beautiful and powerful websites for modern businesses.
              Any business today needs a website that wins customers’ trust and
              helps you do your business well. I make sure your website is up to
              that standard.
            </p>
          </div>
        </div>
        <div className="img-info">
          <img className="about-img" src={svg3} alt="developer" />
        </div>
      </div>
    </Wrapper>
  );
});

export default About;
// export default forwardRef(About);
