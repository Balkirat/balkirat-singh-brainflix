import React, { Component } from "react";
import Header from "./components/Header/header";
import thumbnail00 from "./assets/Images/video-list-0.jpg";
import VideoList from './components/VideoList/index'
import Video from "./components/Video";
class App extends Component {
  
  render() {
    console.log(this.state);
    return <div>
      <Header />
      <Video />
      <VideoList />

    </div>;
  }
}

export default App;
