import React, { Component } from "react";
import Info from "../VideoInfo";
import Comment from "../VideoComments";
import Description from "../VideoDescription";
import Icon from "../Icon";
import "./styles.scss";

class Video extends Component {
  render(props) {
    return (
      <div className="hero__info">
        <Info
          title={this.props.mainVideo.title}
          channel={this.props.mainVideo.channel}
          timeStamp={this.props.mainVideo.timestamp}
          views={this.props.mainVideo.views}
          likes={this.props.mainVideo.likes}
        />
        <Description description={this.props.mainVideo.description} />
        <section className="comments">
          <h3 className="comments__heading">
            {this.props.mainVideoComments.length} Comments
          </h3>
          <p className="comments__text">JOIN THE CONVERSATION</p>
          <form className="comments__form" onSubmit={this.props.handleSubmit}>
            <div>
              <Icon />
            </div>
            <div className="comments__form__wrapper">
              <textarea
                className="comments__form__textarea"
                placeholder="That was easily the most
                spectacular BMX moment ever."
                name="comments"
                value={this.props.mainVideo.comment}
                onChange={this.handleComment}
                required
              ></textarea>
              <button className="comments__form__button" type="submit">
                COMMENT
              </button>
            </div>
          </form>
          <div className="comment__container"></div>
          {this.props.mainVideoComments.map(comment => (
            <Comment
              key={comment.id}
              name={comment.name}
              timestamp={comment.timestamp}
              comment={comment.comment}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Video;
