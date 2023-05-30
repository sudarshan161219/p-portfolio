import styled from "styled-components";

const Wrapper = styled.section`
  /* height: 100vh; */
  scroll-snap-align: center;
  display: grid;
  align-content: start;
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
    padding-bottom: 1rem;
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
`;

export default Wrapper;
