import React, { Component } from "react";
import { Provider } from "react-redux";
import Main from "./components/Main/";
import Navbar from "./components/Navbar";
import { store } from "./store";
import GlobalStyles from "./styles/GlobalStyles";

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <GlobalStyles />
          <Navbar />
          <Main />
        </Provider>
      </>
    );
  }
}
