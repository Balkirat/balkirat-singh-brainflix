import React from "react";
import "./styles.scss";
//import Video from "../Video/index";

const Info = props => {
  console.log("video info", props);
  return (
    <div className="video">
      <h2>{props.title}</h2>
      <div className="video__channel">
        <h5>{props.channel}</h5>
        <p>{props.timeStamp}</p>
      </div>
      <div className="video__views">
     
        <p> <span className='video__icon--views'></span>{props.views}</p>
        <p>  <span className='video__icon--like'></span>{props.likes}</p>
      </div>
    </div>
  );
};

export default Info;
