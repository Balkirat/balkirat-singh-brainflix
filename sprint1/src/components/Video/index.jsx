import React, { Component } from "react";
import MainVideo from "../../data/MainVideo";
import Info from "../VideoInfo/index";
import Comment from "../VideoComments/index";
import Description from "../VideoDescription";
import Icon from "../Icon/icon";

import "./styles.scss";

class Video extends Component {
  constructor() {
    super();
    this.state = MainVideo;
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <video src="" poster={this.state.image}></video>
        <Info
          title={this.state.title}
          channel={this.state.channel}
          timeStamp={this.state.timestamp}
          views={this.state.views}
          likes={this.state.likes}
        />
        <Description description={this.state.description} />
        <section className="comments">
          <h3 className="comments__heading">Join the Conversation</h3>
          <form className="comments__form">
            <div>
              <Icon />
            </div>
            <div>
              <textarea
                placeholder="Add a new comment"
                name="comments"
                required
              ></textarea>
              <button className="comments__form__button" type="submit">
                COMMENT
              </button>
            </div>
          </form>
          <div className="comment__container"></div>

          {this.state.comments.map(comment => (
            <Comment
              name={comment.name}
              timestamp={comment.timeStamp}
              comment={comment.comment}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Video;
