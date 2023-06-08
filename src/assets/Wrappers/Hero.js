import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  line-height: normal;
  display: grid;
  justify-content: space-between;
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
    /* letter-spacing: px; */
  }

  .info-3d-container {
    display: grid;
    align-items: center;
  }

  .img-info {
    z-index: -1;
    order: -1;
    display: grid;
    justify-content: center;
  }

  .hero-img {
    width: 280px;
    animation: animate 2s infinite ease alternate;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  .bn632-hover {
    justify-self: center;
    width: 250px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Titillium Web", sans-serif;
    color: #fff;
    margin-top: 0.7rem;
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

  @media (min-width: 768px) {
    .info {
    letter-spacing: 1.1px;
  }

  }

  @media (min-width: 1024px) {
    display: block;
    .img-info {
      order: 1;
    }

    h1,
    p {
      text-align: left;
    }
    .bn632-hover {
      justify-self: left;
    }

    .hero-img {
      width: 400px;
      display: block;
    }

    .info-3d-container {
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }



    .info{
      position: relative;
    }

    .first-underline{
      position: absolute;
      top: 35px;
      left: 62px;
      width: 300px;
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

    .sec-underline{
      position: absolute;
      top: 100px;
      left: 0px;
      width: 280px;
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
    .hero-img {
      width: 450px;
    }
    .info {
      width: 600px;
    }
  }
`;

export default Wrapper;
