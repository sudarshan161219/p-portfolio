import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/Sidebar";
const Sidebar = () => {
  const [name, setName] = useState(false);

  const handleChange = () => {
    setName(!name);
  };

  console.log(name);

  return (
    <Wrapper>
      <input onChange={handleChange} type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>

      <div className={name ? "sidebar open-sidebar" : "sidebar"}>
        <ul className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
