import styled from "styled-components";

const Wrapper = styled.section`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    .desktop-works-projects-info-container {
      display: grid;
      gap: 10rem;
    }
    .project-span {
      color: #b7b4b9;
      letter-spacing: 1px;
      font-weight: 500;
    }
    h3 {
      text-align: left;
      font-size: 2.8rem;
      color: #eeeeee;
    }

    p {
      text-align: left;
      letter-spacing: 1px;
      line-height: 180%;
    }

    .img-info-container {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .project-img {
      width: 350px;
    }

    .project-info {
      display: grid;
      gap: 1rem;
      justify-items: flex-start;
    }
  }

  .project-img-container {
    position: relative;
  }

  .pattern {
    z-index: -1;
    position: absolute;
    left: -20px;
    bottom: -20px;
  }

  .stack-container {
    width: 100%;
  }

  .tech-stack-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .tech-img {
    width: 40px;
  }

  .links > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #eeeeee;
    text-decoration: none;
  }

  .links {
    margin-top: 2rem;
    gap: 1.2rem;
    display: flex;
    justify-content: space-between;
    /* border-top: 1px solid #eeeeee; */
  }

  .button_text{
    display: flex;
    align-items: center;
    color: #eeeeee;
    gap: 1rem;
    text-decoration:none;
    letter-spacing:1px;
  }

  .link-icon{
    font-size: 1.2rem;
  }

  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 8px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.15s ease;
  }

  .button::before,
  .button::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7d8082;
    transition: all 0.15s ease;
  }

  .button::before {
    top: 0;
    border-bottom-width: 0;
  }

  .button::after {
    bottom: 0;
    border-top-width: 0;
  }

  .button:active,
  .button:focus {
    outline: none;
  }

  .button:active::before,
  .button:active::after {
    right: 3px;
    left: 3px;
  }

  .button:active::before {
    top: 3px;
  }

  .button:active::after {
    bottom: 3px;
  }

  .button_lg {
    position: relative;
    display: block;
    padding: 5px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
  }

  .button_lg::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }

  .button_lg::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all 0.2s ease;
  }

  .button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color:#453edf;
    transform: skew(-15deg);
    transition: all 0.2s ease;
  }

  .button_text {
    position: relative;
  }

  .button:hover {
    color: #0f1923;
  }

  .button:hover .button_sl {
    width: calc(100% + 15px);
  }

  .button:hover .button_lg::after {
    background-color: #fff;
  }
`;

export default Wrapper;
