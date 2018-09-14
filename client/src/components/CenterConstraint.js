import styled from "styled-components";
import { styledProp } from "../utils";

export default styled.div`
  width: ${styledProp("width", "60vw")};
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
