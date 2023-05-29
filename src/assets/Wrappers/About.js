import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: grid;
  justify-content: space-between;
  /* align-items: center; */

  .mobile-conyainer {
    display: grid;
    align-items: center;
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
    z-index: -1;
    order: -1;
    display: grid;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: block;
    .mobile-conyainer {
      height: 80%;
      display: flex;
      align-items: flex-start;
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
  }
`;

export default Wrapper;
