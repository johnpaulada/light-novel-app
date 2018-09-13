import styled from "styled-components";

export default styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-template-rows: repeat(2, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;
