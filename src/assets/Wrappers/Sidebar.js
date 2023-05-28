import styled from "styled-components";

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-family: "Oswald", sans-serif;
  }
  -webkit-tap-highlight-color: transparent;
  .wrapper {
    position: fixed;
    top: 0;
    right: -105%;
    height: 100%;
    width: 100%;
    background: rgba(36, 35, 35, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: all 0.6s ease-in-out;
  }
  #active:checked ~ .wrapper {
    /*left: 0;*/
    right: 0;
  }
  .menu-btn {
    position: absolute;
    z-index: 2;
    right: 5px;
    top: 0px;
    height: 35px;
    width: 35px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .menu-btn span,
  .menu-btn:before,
  .menu-btn:after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 30%;
    width: 65%;
    border-bottom: 2px solid #fff;
    border-color: #fff;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .menu-btn:before {
    transform: translateY(-8px);
  }
  .menu-btn:after {
    transform: translateY(8px);
  }

  .close {
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: background 0.6s;
  }

  /* closing animation */
  #active:checked + .menu-btn span {
    transform: scaleX(0);
  }
  #active:checked + .menu-btn:before {
    transform: rotate(45deg);
    border-color: #fff;
  }

  #active:checked + .menu-btn:after {
    transform: rotate(-45deg);
    border-color: #fff;
  }

  /* #active:checked + .menu-btn {
    background-color: #000;
  } */

  .wrapper ul {
    display: grid;
    position: absolute;
    width: 100%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }
  .wrapper ul li {
    height: 10%;
    margin: 15px 0;
  }
  .wrapper ul li a {
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    padding: 5px 30px;
    color: #fff;
    border-radius: 50px;
    position: absolute;
    margin: 5px 30px;
    opacity: 0;
    transition: all 0.3s ease;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .wrapper ul li a:hover:after {
    transform: scaleY(1);
  }
  .wrapper ul li a:hover {
    color: #1a73e8;
  }
  input[type="checkbox"] {
    display: none;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #202020;
  }
  .content .title {
    font-size: 40px;
    font-weight: 700;
  }
  .content p {
    font-size: 35px;
    font-weight: 600;
  }

  #active:checked ~ .wrapper ul li a {
    opacity: 1;
  }
  .wrapper ul li a {
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
  }
  #active:checked ~ .wrapper ul li a {
    transform: none;
    transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1); /* easeOutBackを緩めた感じ */
    transition-delay: 0.6s;
    transform: translateX(-100px);
  }
`;

export default Wrapper;
