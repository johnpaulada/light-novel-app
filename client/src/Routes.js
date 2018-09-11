import React, { PureComponent } from "react";
import { Router } from "@reach/router";
import { Landing } from "./pages";

export default class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <Landing path="/" />
      </Router>
    );
  }
}
