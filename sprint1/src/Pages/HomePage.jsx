import React, { Component } from "react";
import Header from "../components/Header/header";
import VideoList from "../components/VideoList/index";
import Video from "../components/Video/index";
import SideVideo from "../data/SideVideo";
import MainVideo from "../data/MainVideo";
import HeroVideo from "../components/Hero/Hero";
// import "../styles.scss";

class HomePage extends Component {
  state = {
    sideVideo: SideVideo,
    mainVideo: MainVideo
  };

  videoListHandler = () => {
      console.log("In Home Page",this.state)
      SideVideo.filter(item => item.id !== MainVideo.id);
  }

  render() {
    console.log("In Home Page",this.state);
    return (
      <>
        <Header />
        <HeroVideo heroVideo = {this.state.mainVideo}/>
        <div className="desktop__flex">
          <Video mainVideo = {this.state.mainVideo} />
          <VideoList />
        </div>
      </>
    );
  }
}

export default HomePage;
