import styled from "styled-components";
import { styledProp } from "../utils";

export default styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${styledProp("backgroundColor", "#FAFAFA")};
  ${props =>
    "background" in props && props.backgroundColor
      ? `background: ${props.background};`
      : ""} background-size: cover;
  background-size: cover;
  background-position: center;
`;
