import styled from "styled-components";

export default styled.div`
  min-height: 200px;
  background-color: #fafafa;
  ${props =>
    "image" in props && props.image ? `background: url(${props.image});` : ""};
  border-radius: 5px;
  box-shadow: 0 10px 20px -2px; #333;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate(0, -20px);
  }
`;
