import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  h3 {
    text-align: center;
    font-size: 2rem;
    color: #eeeeee;
  }

  .works-projects-info-container {
    display: grid;
    gap: 3rem;
  }

  .img-info-container {
    border-radius: 8px;
    overflow: hidden;
    display: grid;
    gap: 2rem;
    background: rgba(36, 35, 35, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .project-info {
    display: grid;
    gap: 1rem;
    letter-spacing: 1px;
  }

  .project-span {
    text-align: center;
  }

  .project-img {
    width: 100%;
  }

  .tech-stack-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .tech-img {
    width: 30px;
  }

  .stack-container > span {
    text-align: center;
    font-weight: 500;
    color: #eeeeee;
  }

  .stack-container {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eeeeee;
  }

  .link-icon {
    font-size: 1.5rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .links > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #eeeeee;
    text-decoration: none;
  }

  .links {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eeeeee;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default Wrapper;
