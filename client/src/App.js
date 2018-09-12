import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
