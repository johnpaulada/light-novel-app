import styled from "styled-components";

export default styled.p`
  width: 100%;
  line-height: 2rem;
  margin-bottomL 2rem;
  font-size: 1.25em;
  transition: all 0.25s ease-in;
  color: ${props => ("dark" in props && props.dark ? "#FAFAFA" : "#424242")};
`;
