import React, { useEffect, useState, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Wrapper from "../assets/Wrappers/Sidebar";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const Sidebar = ({ scrollToSection}) => {
  const home = useRef(null)
  const about = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <Wrapper>
      <div className={click ? "menu-btn rotate" : "menu-btn"}>
        <CiMenuFries onClick={handleClick} className="menu-icon" />
        <AiOutlineClose onClick={handleClick} className="menu-icon" />
      </div>
      <div className={click ? "sidebar open-sidebar" : "sidebar"}>
        <ul className="list">
          <li onClick={handleClick}>
            <a href="#" onClick={() => scrollToSection(home)}>
              Home
            </a>
          </li>
          <li onClick={handleClick}>
            <a href="#" onClick={() => scrollToSection(about)}>
              About
            </a>
          </li>
          <li onClick={handleClick}>
            <a href="#" onClick={() => scrollToSection(project)}>
              Projects
            </a>
          </li>
          <li onClick={handleClick}>
            <a href="#" onClick={() => scrollToSection(contact)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
