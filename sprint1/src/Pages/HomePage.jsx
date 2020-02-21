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

  filteredVideoList = () => {
    return this.state.sideVideo.filter(
      item => item.id !== this.state.mainVideo.id
    );
  };

  render() {
    console.log("In Home Page", this.state);
    return (
      <>
        <Header />
        <HeroVideo heroVideo={this.state.mainVideo} />
        <div className="desktop__flex">
          <Video mainVideo={this.state.mainVideo} />
          <VideoList videoList={this.filteredVideoList()} />
        </div>
      </>
    );
  }
}

export default HomePage;
