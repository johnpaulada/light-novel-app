import { Link } from "@reach/router";
import styled from "styled-components";
import { styledProp } from "../utils";

export default styled(Link)`
  text-decoration: none;
  color: ${styledProp("color", "#272d33")};
`;
