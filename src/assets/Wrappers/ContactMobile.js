import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  /* background: rgba(36, 35, 35, 0.6);
  box-shadow: rgba(31, 38, 135, 0.37) 0px 8px 32px 0px;
  backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px; */

  .mobile-form {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }

  .mobile-form > input {
    font-family: inherit;
    letter-spacing: 1.1px;
    line-height: normal;
    background-color: inherit;
    /* outline: none; */
    /* border: none; */
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
    /* outline: none;
    border: none; */
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
    margin-top: 0.7rem;
    /* height: 40px; */
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
    animation: animateIcon 2s infinite  cubic-bezier(0.075, 0.82, 0.165, 1)  0.2s;
;
  }



  @keyframes animateIcon {
   from {
      background-position: 100% 0;
    }
  }

  @media (min-width: 1020px) {
    display: none;
  }
`;

export default Wrapper;
