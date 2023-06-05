import React, { useRef } from "react";
import {
  Navbar,
  Hero,
  About,
  Works,
  Contact,
  ScrolltoTopBtn,
} from "./components/index";
import Wrapper from "./assets/Wrappers/App";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  return (
    <Wrapper>
      <Navbar home={home} about={about} contact={contact} project={project} />
      <Hero ref={home} contact={contact} />
      <About ref={about} />
      <Works ref={project} />
      <Contact ref={contact} />
      <ScrolltoTopBtn />
    </Wrapper>
  );
};

export default App;
