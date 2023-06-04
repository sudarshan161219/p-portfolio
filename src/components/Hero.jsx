import React, { forwardRef } from "react";
import Wrapper from "../assets/Wrappers/Hero";
import svg1 from "/img/svg-1-1.svg";
import Navbar from "../components/Navbar";

const Hero = forwardRef((props, ref) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleEvent = (e) => {
    let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((lettter, index) => {
          if (index < iterations) {
            return e.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= e.target.dataset.value.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);
  };

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper ref={ref}>
      <div className="info-3d-container">
        <div className="info">
          <h1>
            Hi, I am{" "}
            <span onMouseOver={handleEvent} data-value="Sudarshan">
              Sudarshan
            </span>
            , <br /> Web Developer
          </h1>
          <p>
            I build beautiful websites and web apps for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, <br /> I will give you a time and cost
            estimate.
          </p>
          <button
            className="bn632-hover bn22"
            onClick={() => scrollToSection(props.contact)}
          >
            Get In Touch
          </button>
        </div>
        <div className="img-info">
          <img className="hero-img" src={svg1} alt="moon" />
        </div>
      </div>
    </Wrapper>
  );
});

// export default forwardRef(Hero);
export default Hero;
