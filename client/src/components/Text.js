import styled from "styled-components";
import { styledProp } from "../utils";

export default styled.p`
  color: ${styledProp("color", "#FAFAFA")};
  font-size: ${styledProp("fontSize", "5.063em")};
`;
