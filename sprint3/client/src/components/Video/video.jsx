import React, { Component } from "react";
import Info from "../VideoInfo";
import Comment from "../VideoComments";
import Description from "../VideoDescription";
import Icon from "../Icon";
import axios from "axios";
import { API_URL } from "../../App";
import "./styles.scss";

const apiKey = "2ae78d53-3395-4750-bd93-293f822578";

class Video extends Component {
  constructor(props) {
    super(props);
    let number = this.props.mainVideo.comments.length;
    this.props.mainVideo.comments = this.props.mainVideo.comments.sort(function(
      a,
      b
    ) {
      var dateA = a.timestamp,
        dateB = b.timestamp;
      return dateB - dateA;
    });
    this.state = {
      comment: "",
      comments: this.props.mainVideo.comments,
      numberOfComments: number
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.mainVideo.comments = nextProps.mainVideo.comments.sort(function(
      a,
      b
    ) {
      var dateA = a.timestamp,
        dateB = b.timestamp;
      return dateB - dateA;
    });
    this.setState({
      comment: "",
      comments: nextProps.mainVideo.comments,
      numberOfComments: nextProps.mainVideo.comments.length
    });
  }

  handleComment = event => {
    this.setState({
      comment: event.target.value
    });
    event.value = "";
  };

  handleSubmit = event => {
    event.preventDefault();
    let commentObj = {
      name: "nigel",
      comment: this.state.comment
    };
    axios
      .post(
        `${API_URL}/videos/${this.props.mainVideo.id}/comments?api_key=${apiKey}`,
        commentObj
      )
      .then(response => {
        axios
          .get(`${API_URL}/videos/${this.props.mainVideo.id}?api_key=${apiKey}`)
          .then(response => {
            response.data.comments = response.data.comments.sort(function(
              a,
              b
            ) {
              var dateA = a.timestamp,
                dateB = b.timestamp;
              return dateB - dateA;
            });
            this.setState({
              comment: "",
              comments: response.data.comments,
              numberOfComments: response.data.comments.length
            });
          });
      });
  };

  render() {
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
            {this.state.numberOfComments} Comments
          </h3>
          <p className="comments__text">JOIN THE CONVERSATION</p>
          <form className="comments__form" onSubmit={this.handleSubmit}>
            <div>
              <Icon />
            </div>
            <div className="comments__form__wrapper">
              <textarea
                className="comments__form__textarea"
                placeholder="That was easily the most
                spectacular BMX moment ever."
                name="comments"
                value={this.state.comment}
                onChange={this.handleComment}
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
