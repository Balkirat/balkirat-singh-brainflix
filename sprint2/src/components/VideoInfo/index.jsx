import React from "react";
import "./styles.scss";
//import Video from "../Video/index";

const Info = props => {
 // console.log("video info", props);

  function getTime(timeStamp){
   let check = new Date(timeStamp);
    return check.toLocaleDateString();
  }

  return (
    <section className="video">
      <h2 className="video__header">{props.title}</h2>
      <div className="video__tablet--wrapper">
        <div className="video__channel">
          <h5>By {props.channel}</h5>
          <p>{getTime(props.timeStamp)}</p>
        </div>
        <div className="video__icon"> 
          <p> <span className='video__icon--views'></span>{props.views}</p>
          <p>  <span className='video__icon--like'></span>{props.likes}</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
