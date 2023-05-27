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
      {/* <div className="menu-container">
        <ul>
            <li>About</li>
            <li>Projects</li>
            <li> <button className="button-28" role="button">Get In Touch!</button></li>
        </ul>
      </div> */}
      <Sidebar />
      {/* <div className="mobile-menu-container">
        <p>menu</p>
      </div> */}
    </Wrapper>
  );
};

export default Navbar;
