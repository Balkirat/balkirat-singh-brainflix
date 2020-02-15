import React, { Component } from "react";
import MainVideo from "../../data/MainVideo";


class Video extends Component {
  constructor() {
    super();
    this.state = MainVideo;
  }
  render() {
    console.log(this.state);
    return (
      <div>
      <p>Video</p>
    </div>
    );
  }
}

export default Video;

