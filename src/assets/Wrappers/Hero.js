import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  line-height: normal;
  scroll-snap-type: mandatory;

  h1 {
    text-align: center;
    font-size: 2.8rem;
    color: #eeeeee;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: #d6d6d6;
  }

  .info {
    display: grid;
    gap: 1rem;
    text-align: left;
    letter-spacing: 1.1px;
  }

  .info-3d-container {
    display: grid;
    align-items: center;
    gap: 1rem;
  }

  .hero-img {
    width: 100%;
  }

  .bn632-hover {
    justify-self: center;
    width: 160px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Titillium Web", sans-serif;
    color: #fff;

    height: 40px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .bn632-hover:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }

  .bn632-hover:focus {
    outline: none;
  }

  .bn632-hover.bn22 {
    background-image: linear-gradient(
      to right,
      #11009e,
      #4942e4,
      #8696fe,
      #d23369,
      #cb1c8d
    );
    box-shadow: 0 4px 15px 0 rgba(88, 39, 245, 0.52);
  }
  @media (min-width: 1024px) {
    h1,
    p {
      text-align: left;
    }
    .bn632-hover {
      justify-self: left;
    }

    .hero-img {
      width: 400px;
    }

    .info-3d-container {
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (min-width: 1366px) {
    .hero-img {
      width: 500px;
    }
    .info {
      width: 600px;
    }
  }
`;

export default Wrapper;
