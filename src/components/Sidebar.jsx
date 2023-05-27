import React from "react";
import Wrapper from "../assets/Wrappers/Sidebar";
const Sidebar = () => {
  return (
    <Wrapper>
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <span></span>
      </label>
      <label for="active" class="close"></label>
      <div class="wrapper">
        <ul>
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
