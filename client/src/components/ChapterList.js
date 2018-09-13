import styled from "styled-components";

export default styled.ol`
  width: 100%;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 70px;
  grid-gap: 15px;
  margin-top: 20px;
`;
