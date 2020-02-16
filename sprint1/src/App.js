import React, { Component } from "react";
import Header from "./components/Header/header";
import VideoList from "./components/VideoList/index";
import Video from "./components/Video/index";
class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <Video />
        <VideoList />
      </div>
    );
  }
}

export default App;
