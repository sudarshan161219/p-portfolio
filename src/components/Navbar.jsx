import React from "react";
import Wrapper from "../assets/Wrappers/Navbar";
import logo from "/img/logo.png";
import Sidebar from "./Sidebar";

const Navbar = ({ scrollToSection }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <Sidebar
        scrollToSection={scrollToSection}
      />
    </Wrapper>
  );
};

export default Navbar;
