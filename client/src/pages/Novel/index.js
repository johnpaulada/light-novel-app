import React, { PureComponent } from "react";
import {
  Banner,
  CenterConstraint,
  MainTitle,
  NovelContainer
} from "../../components";

class Novel extends PureComponent {
  render() {
    return (
      <NovelContainer backgroundColor="#f4f7fb">
        <Banner
          height="25vh"
          image="https://vignette.wikia.nocookie.net/overlordmaruyama/images/d/d5/Overlord_Characters.png/revision/latest?cb=20160619122954"
        />
        <CenterConstraint>
          <MainTitle color="#333" fontSize="3.375em" textAlign="center">
            Genjitsu Oukokukaizoukin
          </MainTitle>
        </CenterConstraint>
      </NovelContainer>
    );
  }
}

export default Novel;
