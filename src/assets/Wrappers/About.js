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

  p {
    line-height: 1.1rem;
    line-height: normal;
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
  }

  @media (min-width: 1366px) {
    .about-img {
      width: 450px;
    }
    .about-info-container {
      width: 600px;
    }
  }
`;

export default Wrapper;
