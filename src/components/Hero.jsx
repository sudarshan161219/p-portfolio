import React from "react";
import Wrapper from "../assets/Wrappers/Hero";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="info">
        <h1>Hi, I am Sudarshan, Web Developer </h1>
        <p>
          I build beautiful websites and web apps for businesses around the
          globe. If you need a modern and powerful website, send me an email. If
          we are a good fit, I will give you a time and cost estimate.
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
