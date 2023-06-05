import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Wrapper from "../assets/Wrappers/Sidebar";

const Sidebar = ({ home, about, contact, project }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [click]);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
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
          <li onClick={() => scrollToSection(home)}>Home</li>
          <li onClick={() => scrollToSection(about)}>About</li>
          <li onClick={() => scrollToSection(project)}>Projects</li>
          <li onClick={() => scrollToSection(contact)}>Contact</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
