import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  color: #eeeeee;
  background-size: cover;
  scroll-snap-type: mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 950px;
    margin: 0 auto;
  }

  @media (min-width: 1366px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export default Wrapper;
