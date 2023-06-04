import React from "react";
import Wrapper from "../assets/Wrappers/Navbar";
import logo from "/img/logo.png";
import Sidebar from "./Sidebar";

const Navbar = ({ home, about, contact, project }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <Sidebar home={home} about={about} contact={contact} project={project} />
    </Wrapper>
  );
};

export default Navbar;
