import React from "react";
import Wrapper from "../assets/Wrappers/Hero";
import svg1 from "../../public/img/svg-1-1.svg"
import Navbar from "../components/Navbar"

const Hero = () => {
  return (
    <Wrapper>
      <div className="info-3d-container">
        <div className="info">
          <h1>
            Hi, I am Sudarshan, <br /> Web Developer
          </h1>
          <p>
            I build beautiful websites and web apps for businesses around the
            globe. If you need a modern and powerful website,  send me an email.
            If we are a good fit, <br />  I will give you a time and cost estimate.
          </p>
          <button className="bn632-hover bn22">Get In Touch</button>
        </div>
        <div className="img-info">
          {/* <img className="hero-img" src={moon} alt="moon" /> */}
          <img className="hero-img" src={svg1} alt="moon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
