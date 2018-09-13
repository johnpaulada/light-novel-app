import styled from "styled-components";
import FullContainer from "../FullContainer";
import background from "./assets/background.png";

export default styled(FullContainer)`
  display: flex;
  justify-content: space-around;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  align-items: center;
  background: #4bc0c8;
  background: -moz-linear-gradient(top, #feac5e 1%, #c779d0 50%, #4bc0c8 100%);
  background: -webkit-linear-gradient(
    top,
    #feac5e 1%,
    #c779d0 50%,
    #4bc0c8 100%
  );
  background: linear-gradient(to bottom, #feac5e 1%, #c779d0 50%, #4bc0c8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feac5e', endColorstr='#4bc0c8',GradientType=0 );
  background: url(${background});
  background-size: cover;
  background-position: center;

  @media (max-width: 412px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
`;
