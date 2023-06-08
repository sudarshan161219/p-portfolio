import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: grid;

  .info-container {
    position: relative;
    display: grid;
    gap: 1.5rem;
  }

  .email-span {
    padding: 0 0.3rem;
    background: linear-gradient(90deg, #4942e4 35%, rgb(30, 16, 175) 100%);
  }

  @media (min-width: 1020px) {
    h2 {
      text-align: left;
    }

    .heading-container{
      position: relative;
    }
    .heading-underline{
      position: absolute;
      top: 25px;
      left: 120px;
      width: 110px;
      height: 25px;
      background: rgb(81, 76, 231);
      background: linear-gradient(
        90deg,
        rgba(81, 76, 231, 1) 35%,
        rgba(30, 16, 175, 1) 100%
      );
      opacity: 0.9;
      z-index: -1;
    }
  }
`;

export default Wrapper;
