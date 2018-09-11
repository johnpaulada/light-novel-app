import styled from "styled-components";
import FullContainer from "./FullContainer";

export default styled(FullContainer)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  align-items: center;
  background: #ef629f;
  background: -moz-linear-gradient(top, #eecda3 1%, #ef629f 100%);
  background: -webkit-linear-gradient(top, #eecda3 1%, #ef629f 100%);
  background: linear-gradient(to bottom, #eecda3 1%, #ef629f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eecda3', endColorstr='#ef629f',GradientType=0 );
`;
