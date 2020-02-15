import React, { Component } from "react";
import sideVideo from "../../data/SideVideo";

class ReviewPod extends Component {
  constructor() {
    super();
    this.state = sideVideo;
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.map(list => (
          <>
            <img src={list.image} alt="" />
            <p>{list.title}</p>
            <p>{list.channel}</p>
          </>
        ))}
      </div>
    );
  }
}

export default ReviewPod;
