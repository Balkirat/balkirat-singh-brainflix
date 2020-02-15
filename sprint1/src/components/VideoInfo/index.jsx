import React, { Component } from "react";
//import Video from "../Video/index";

const Info = props => {
  console.log("video info", props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.channel}</p>
      <p>{props.timeStamp}</p>
      <p>{props.views}</p>
      <p>{props.likes}</p>
    </div>
  );
};

export default Info;
