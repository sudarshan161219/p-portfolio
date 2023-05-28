import styled from "styled-components";

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  .logo-img {
    width: 110px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  .button-28 {
    font-size: 1.1rem;
    text-transform: uppercase;
    padding: 8px 16px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    background-image: linear-gradient(
      to right,
      #000000 0%,
      #434343 51%,
      #243b55 100%
    );
    border: #d7d2cc 1px solid;
    outline: none;
    border-radius: 2px;
  }

  .button-28:hover {
    background-position: right center;
    cursor: pointer;
    border-radius: 8px;
    border: none;
  }

  .menu-container {
    display: none;
  }

  @media (min-width: 1024px) {
    .logo-img {
      width: 150px;
    }
    .menu-container {
      display: block;
    }
    .mobile-menu-container {
      display: none;
    }
  }
`;

export default Wrapper;
