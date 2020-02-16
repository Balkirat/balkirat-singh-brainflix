import React, { Component } from "react";
import SideVideo from "../../data/SideVideo";
import MainVideo from "../../data/MainVideo";
import "../VideoList/styles.scss";

class VideoList extends Component {
  constructor() {
    super();
    var newList = SideVideo.filter(item => item.id !== MainVideo.id);
    console.log("New Array:",newList);
    this.state = newList;
  }
  render() {
    console.log(this.state);

    return (
      <div className="sidevideo">
        <h2>Next Video</h2>
        {this.state.map(list => (
          <div className="sidevideo__container">
            <img src={list.image} alt="" />
            <div>
              <p className="ellipsis">{list.title}</p>
              <p>{list.channel}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default VideoList;
