import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  line-height: normal;

  h1 {
    font-size: 2.8rem;
    color: #eeeeee;
  }

  p {
    font-size: 1.2rem;
    color: #d6d6d6;
  }

  .info {
    margin-top: 5rem;
    display: grid;
    gap: 1rem;
    text-align: left;
    letter-spacing: 1.1px;
  }
`;

export default Wrapper;
