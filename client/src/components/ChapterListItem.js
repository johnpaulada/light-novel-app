import styled from "styled-components";

export default styled.li`
  border-radius: 5px;
  box-shadow: 0 19px 45px -10px rgba(0, 0, 0, 0.3);
  list-style: none;
  background-color: #ffffff;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  border-left: 20px solid #5596e6;
  margin-top: 10px;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
    transform: translate(0, -5px);
  }
`;
