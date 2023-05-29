import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Wrapper from "../assets/Wrappers/Sidebar";

const Sidebar = () => {
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
            <a href="#">Home</a>
          </li>
          <li onClick={handleClick}>
            <a href="#">About</a>
          </li>
          <li onClick={handleClick}>
            <a href="#">Projects</a>
          </li>
          <li onClick={handleClick}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
