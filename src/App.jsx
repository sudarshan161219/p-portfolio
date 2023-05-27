import React from "react";
import { Hero, About, Works, Contact } from "./components/index";
import Wrapper from "./assets/Wrappers/App";

const App = () => {
  return (
    <Wrapper>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Wrapper>
  );
};

export default App;
