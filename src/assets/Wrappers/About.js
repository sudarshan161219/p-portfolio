import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: grid;
  justify-content: space-between;
  align-items: center;

  .mobile-container {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .img-info-container {
    display: grid;
    align-items: center;
    gap: 3rem;
  }

  .img-info {
    display: grid;
    justify-content: center;
  }

  strong {
    text-align: center;
    font-size: 1.7rem;
    color: #eeeeee;
  }
  .para-container {
    display: grid;
    align-items: center;
    gap: 1rem;
    letter-spacing: 1.1px;
    line-height: normal;
  }

  .about-img {
    width: 280px;
    animation: animate 2s infinite ease alternate;
  }

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }

  .img-info {
    display: grid;
    justify-content: center;
  }

  .desktop-container {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
    height: 80vh;
    .mobile-container {
      display: none;
    }
    .desktop-container {
      display: flex;
      justify-content: space-between;
    }
    .about-img {
      width: 400px;
    }
    .img-info-container {
      width: 60%;
    }
    strong,
    p {
      text-align: left;
    }

    .about-info-container > h2 {
      text-align: left;
    }
    .about-info-container {
      display: grid;
      gap: 1rem;
      text-align: left;
      letter-spacing: 1.1px;
    }
    .span {
      display: grid;
      gap: 0.1rem;
    }

    .heading-container {
      position: relative;
      display: flex;
    }

    .desktop-heading-underline {
      position: absolute;
      top: 25px;
      left: 105px;
      width: 80px;
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

  @media (min-width: 1360px) {
    .about-img {
      width: 450px;
    }
    .about-info-container {
      width: 600px;
    }
  }
`;

export default Wrapper;
