import React, { PureComponent } from "react";
import { LandingContainer, MainTitle } from "../../components";

class Landing extends PureComponent {
  render() {
    return (
      <LandingContainer>
        <MainTitle>Awesome Stuff!</MainTitle>
        <h2>Other Awesome Stuff</h2>
      </LandingContainer>
    );
  }
}

export default Landing;
