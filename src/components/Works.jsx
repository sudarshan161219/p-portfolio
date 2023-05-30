import React from "react";
import Wrapper from "../assets/Wrappers/Works";
import projectz from "../utils/index";
import { FiGithub, FiLink2 } from "react-icons/fi";
import Mobile from "./Mobile"
import Desktop from "./Desktop"

const Works = () => {
  return (
    <Wrapper>
      <Mobile  />
      <Desktop />
    </Wrapper>
  );
};

export default Works;
