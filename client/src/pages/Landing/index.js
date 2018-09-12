import React, { PureComponent } from "react";
import {
  LandingContainer,
  LandingTitleContainer,
  MainTitle
} from "../../components";

class Landing extends PureComponent {
  render() {
    return (
      <LandingContainer>
        <header>
          <LandingTitleContainer>
            <MainTitle>La=Nobe</MainTitle>
            <MainTitle fontSize="1.5em">
              Light Novels for Everyone to Enjoy!
            </MainTitle>
          </LandingTitleContainer>
        </header>
      </LandingContainer>
    );
  }
}

export default Landing;
