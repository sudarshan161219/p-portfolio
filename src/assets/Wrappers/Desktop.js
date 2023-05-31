import styled from "styled-components";

const Wrapper = styled.section`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    .desktop-works-projects-info-container {
      display: grid;
      gap: 10rem;
    }
    .project-span {
      color: #b7b4b9;
      letter-spacing: 1px;
      font-weight: 500;
    }
    h3 {
      text-align: left;
      font-size: 2.8rem;
      color: #eeeeee;
    }

    p {
      text-align: left;
      letter-spacing: 1px;
      line-height: 180%;
    }

    .img-info-container {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .project-img {
      width: 350px;
    }

    .project-info {
      display: grid;
      gap: 1rem;
      justify-items: flex-start;
    }
  }

  .project-img-container{
    position: relative;
  }

  .pattern{
    z-index: -1;
    position: absolute;
    left: -20px;
    bottom: -20px;
  }

  .stack-container{
    width: 100%;
  }

  .tech-stack-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .tech-img {
    width: 40px;
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

`;

export default Wrapper;
