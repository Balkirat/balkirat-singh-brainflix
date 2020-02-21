import React from "react";
import "../VideoList/styles.scss";

function VideoList(props) {
  console.log("in side video", props.videoList);
  return (
    <aside className="sidevideo">
      <h2 className="sidevideo__header">Next Video</h2>
      {props.videoList.map(list => (
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

export default VideoList;
