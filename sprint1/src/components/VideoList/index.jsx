import React, { Component } from "react";
import sideVideo from "../../data/SideVideo";
import "../VideoList/styles.scss";

class ReviewPod extends Component {
  constructor() {
    super();
    this.state = sideVideo;
  }
  render() {
    console.log(this.state);
    return (
      <div className="sidevideo">
        <h2>Next Video</h2>
        {this.state.map(list => (
          <div className="sidevideo__container">
            <img src={list.image} alt="" />
            <div >
              <p>{list.title}</p>
              <p>{list.channel}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewPod;
