import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  color: #EEEEEE;
  background: url("/public/img/bg-2.jpg");
  background-size: cover;
  scroll-snap-type: mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Wrapper;
