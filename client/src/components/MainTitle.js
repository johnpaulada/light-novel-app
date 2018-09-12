import styled from "styled-components";
import { styledProp } from "../utils";

export default styled.h1`
  color: ${styledProp("color", "#FAFAFA")};
  font-size: ${styledProp("fontSize", "5.063em")};
  font-weight: 900;
  text-align: ${styledProp("textAlign", "left")};
  text-shadow: 0 2px 2px #333;
  margin: 0;
`;
