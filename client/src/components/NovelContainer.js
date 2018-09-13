import styled from "styled-components";
import { styledProp } from "../utils";

export default styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${styledProp("backgroundColor", "#FAFAFA")};
`;
