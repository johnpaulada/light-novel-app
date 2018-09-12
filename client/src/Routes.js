import { Router } from "@reach/router";
import React, { PureComponent } from "react";
import { Chapter, Landing, Novel, NovelList } from "./pages";

export default class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <Landing path="/" />
        <NovelList path="/novels" />
        <Novel path="/novels/:id" />
        <Chapter path="/novels/:novelId/chapters/:id" />
      </Router>
    );
  }
}
