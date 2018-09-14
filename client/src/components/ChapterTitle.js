import styled from "styled-components";

export default styled.h1`
  margin: 0;
  color: ${props => ("dark" in props && props.dark ? "#FAFAFA" : "#414141")};
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 3.375em;
  text-shadow: 0 2px 4px #212121;
  transition: all 0.25s ease-in;
  text-align: center;
`;
