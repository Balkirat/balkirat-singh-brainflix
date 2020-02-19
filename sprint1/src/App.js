import React, { Component } from "react";
import "./styles.scss";
import HomePage from "./Pages/HomePage";

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <>
        <HomePage />
      </>
    );
  }
}

export default App;
