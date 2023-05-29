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

  .list li a {
    opacity: 1;
  }

  .menu-icon{
    font-size:1.8rem;
    cursor: pointer;
  }

  .menu-btn{
    z-index: 1;
    margin-top:0.35rem;
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50%;
    position:absolute;
    top: 0;
    right: -43px;
    transform: rotate(0deg);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  }
 

  .rotate{
    transform: rotate(180deg);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  }

`;

export default Wrapper;
