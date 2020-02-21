import React from "react";
import Info from "../VideoInfo/index";
import Comment from "../VideoComments/index";
import Description from "../VideoDescription";
import Icon from "../Icon/icon";

import "./styles.scss";

const Video = props => {
  console.log("In video", props.mainVideo.id);
  return (
    <div className="hero__info">
      <Info
        title={props.mainVideo.title}
        channel={props.mainVideo.channel}
        timeStamp={props.mainVideo.timestamp}
        views={props.mainVideo.views}
        likes={props.mainVideo.likes}
      />
      <Description description={props.mainVideo.description} />
      <section className="comments">
        <h3 className="comments__heading">3 Comments</h3>
        <p className="comments__text">JOIN THE CONVERSATION</p>
        <form className="comments__form">
          <div>
            <Icon />
          </div>
          <div>
            <textarea
              placeholder="That was easily the most
                spectacular BMX moment ever."
              name="comments"
              required
            ></textarea>
            <button className="comments__form__button" type="submit">
              COMMENT
            </button>
          </div>
        </form>
        <div className="comment__container"></div>
        {/* {console.log("GGGGGGG", props.mainVideo.comments.length)} */}
        {props.mainVideo.comments.map(comment => (
          <Comment
            name={comment.name}
            timestamp={comment.timeStamp}
            comment={comment.comment}
          />
        ))}
      </section>
    </div>
  );
};

export default Video;
