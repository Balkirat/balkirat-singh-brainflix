import React, { Component } from "react";
import Header from "./components/Header/header";
import VideoList from "./components/VideoList/index";
import Video from "./components/Video/index";
import "./styles.scss";

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        <Video />
        <VideoList />
      </>
    );
  }
}

export default App;
