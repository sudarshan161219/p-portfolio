import styled from "styled-components";

const Wrapper = styled.section`
  /* width: 100%; */
  height: 200px;
  padding: 1rem;
  background: rgba(36, 35, 35, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  display: flex;
  align-items: center;

  h4 {
    font-size: 2rem;
    text-align: center;
  }
`;

export default Wrapper;
