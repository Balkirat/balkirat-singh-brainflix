import React, { Component } from "react";
import "../VideoList/styles.scss";

class VideoList extends Component {
  render(props) {
    console.log("in side video", this.props);
    return (
      <aside className="sidevideo">
        <h2 className="sidevideo__header">Next Video</h2>
        {this.props.videoList.map(list => (
          <div className="sidevideo__container">
            <img src={list.image} alt=""  />
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
