import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  line-height: normal;
  scroll-snap-type: mandatory;

  h1 {
    font-size: 2.8rem;
    color: #eeeeee;
  }

  p {
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

  @media (min-width: 1024px) {
    .info-3d-container {
      height: 80%;
      display: flex;
      align-items: center;
    }
  }
`;

export default Wrapper;
