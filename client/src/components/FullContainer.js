import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props =>
    "backgroundColor" in props && props.backgroundColor
      ? props.backgroundColor
      : "#FAFAFA"};
  ${props =>
    "background" in props && props.backgroundColor
      ? `background: ${props.background};`
      : ""};
`;
