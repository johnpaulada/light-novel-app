import styled from "styled-components";

export default styled.button`
  margin: 10px;
  margin-left: 0;
  background: none;
  border: none;
  color: ${props => ("dark" in props && props.dark ? "#FAFAFA" : "#333")};
  cursor: pointer;
  font-family: Ubuntu, sans-serif;
  letter-spacing: 1px;
  font-weight: 400;
  transition: all 0.25s ease-in;
`;
