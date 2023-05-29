import React from "react";
import { Navbar, Hero, About, Works, Contact } from "./components/index";
import Wrapper from "./assets/Wrappers/App";

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </Wrapper>
  );
};

export default App;
