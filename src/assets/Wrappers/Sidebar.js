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
  .sidebar{
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

  .open-sidebar{
    right: 0;
  }

  .list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    justify-content: center;
    list-style: none;
    text-align: center;
  }
  .list  li {
    height: 10%;
    margin: 15px 0;
  }
  .list  li a {
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    border-radius: 50px;
    opacity: 0;
    transition: all 0.3s ease;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .list  li a:hover:after {
    transform: scaleY(1);
  }
  .list  li a:hover {
    color: #1a73e8;
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


  input[type="checkbox"] {
    display: none;
  }



  .list li a {
    opacity: 1;
  }
  /* .list li a {
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
  } */
 

`;

export default Wrapper;
