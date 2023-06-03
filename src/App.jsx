import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Hero, About, Works, Contact } from "./components/index";
import Sidebar from "./components/Sidebar"
import Wrapper from "./assets/Wrappers/App";

const App = () => {

  const home = useRef(null)
  const about = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior:'smooth'
    })
  }

  return (
    <Wrapper>
      <Navbar   scrollToSection={scrollToSection} />
      <Hero ref={home} />
      <About ref={about} />
      <Works ref={project} />
      <Contact ref={contact}/>
    </Wrapper>
  );
};

export default App;
