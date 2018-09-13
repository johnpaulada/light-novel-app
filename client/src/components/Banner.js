import styled from "styled-components";
import { styledProp } from "../utils";

export default styled.div`
  width: 100%;
  min-height: 200px;
  height: ${styledProp("height", "200px")};
  ${props =>
    "image" in props && props.image ? `background: url(${props.image});` : ""}
  background-size: ${props =>
    "shouldCover" in props && props.shouldCover ? "cover" : "contain"};
  background-position: center;
  box-shadow: 0 4px 8px -4px #333;
  margin-bottom: 30px;
`;
