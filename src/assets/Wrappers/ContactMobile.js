import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  margin-top: 2rem;
  background-image: url("/img/blob.svg");
  background-repeat: no-repeat;
  background-position: 144px 123px;
  position: relative;
  .mobile-form {
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background: rgba(36, 35, 35, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
  }

  .mobile-form > input {
    font-family: inherit;
    letter-spacing: 1.1px;
    line-height: normal;
    background-color: inherit;
    outline: none;
    border: none;
    /* border-bottom: 0.5px solid #d6d6d6; */
    padding: 0.5rem;
    color: #d6d6d6;
    font-size: 1.3rem;
  }

  .mobile-text-area {
    font-family: inherit;
    letter-spacing: 1.1px;
    line-height: normal;
    padding: 0.5rem;
    color: #d6d6d6;
    resize: vertical;
    background-color: inherit;
    outline: none;
    border: none;
    font-size: 1.5rem;
  }

  .send-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    justify-self: center;
    width: 250px;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Titillium Web", sans-serif;
    color: #fff;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .send-btn:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }

  .send-btn:focus {
    outline: none;
  }

  .send-btn {
    background-image: linear-gradient(
      to right,
      #11009e,
      #4942e4,
      #8696fe,
      #d23369,
      #cb1c8d
    );
    box-shadow: 0 4px 15px 0 rgba(88, 39, 245, 0.52);
    animation: animateIcon 2s infinite cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
  }

  @keyframes animateIcon {
    from {
      background-position: 100% 0;
    }
  }

  .info-container {
    position: relative;
  }

  .email-span {
    padding: 0 0.3rem;
    background: linear-gradient(90deg, #4942e4 35%, rgb(30, 16, 175) 100%);
  }

  .blob-container {
    position: absolute;
    bottom: -50px;
    right: -200px;
    left: 0;
    z-index: -10;
  }

  .blob {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 1;
  }

  .blob1 {
    filter: blur(50px);
  }

  @media (min-width: 1020px) {
    display: none;
  }
`;

export default Wrapper;
