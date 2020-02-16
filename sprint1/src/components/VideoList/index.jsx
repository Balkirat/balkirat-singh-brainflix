import React, { Component } from "react";
import SideVideo from "../../data/SideVideo";
import MainVideo from "../../data/MainVideo";
import "../VideoList/styles.scss";

var newList = SideVideo.filter(item => item.id !== MainVideo.id);
console.log("New Array:", newList);

class VideoList extends Component {
  state = newList;

  render() {
    console.log(this.state);
    return (
      <aside className="sidevideo">
        <h2 className="sidevideo__header">Next Video</h2>
        {this.state.map(list => (
          <div className="sidevideo__container">
            <img src={list.image} alt="" />
            <div>
              <p className="sidevideo__ellipsis">{list.title}</p>
              <p className="sidevideo__channel">{list.channel}</p>
            </div>
          </div>
        ))}
      </aside>
    );
  }
}

export default VideoList;
