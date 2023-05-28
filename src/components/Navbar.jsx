import React from "react";
import Wrapper from "../assets/Wrappers/Navbar";
import logo from "../../public/img/logo.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <Sidebar />
    </Wrapper>
  );
};

export default Navbar;
