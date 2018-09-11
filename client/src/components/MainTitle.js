import styled from "styled-components";
import { styledProp } from "../utils";

export default styled.h1`
  color: ${styledProp("color", "#FAFAFA")};
  font-size: ${styledProp("fontSize", "5.063em")};
  font-weight: 900;
`;
