import React, { Component } from "react";
import MainVideo from "../../data/MainVideo";
import Info from "../VideoInfo/index";
import Comment from "../VideoComments/index";
import Description from "../VideoDescription";
import Icon from "../Icon/icon";
import PlayIcon from "../../assets/Icons/SVG/Icon-play.svg";
import FullscreenIcon from "../../assets/Icons/SVG/Icon-fullscreen.svg";
import VolumeIcon from "../../assets/Icons/SVG/Icon-volume.svg";

import "./styles.scss";

class Video extends Component {
  constructor() {
    super();
    this.state = MainVideo;
  }
  render() {
    console.log(this.state);
    return (
      <main className="hero">
        <div className="hero__video">
        <video
          src=""
          poster={this.state.image}
          className="hero__fullscreenicon"
        >
          <span className="hero__fullscreenicon hero__volumeicon"></span>
        </video>
        </div>
 
        <img className="hero__playicon" src={PlayIcon} alt="" />
        {/* <img className="hero__fullscreenicon" src={FullscreenIcon} alt=""/>
        <img className="hero__volumeicon" src={VolumeIcon} alt=""/> */}
        <Info
          title={this.state.title}
          channel={this.state.channel}
          timeStamp={this.state.timestamp}
          views={this.state.views}
          likes={this.state.likes}
        />
        <Description description={this.state.description} />
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

          {this.state.comments.map(comment => (
            <Comment
              name={comment.name}
              timestamp={comment.timeStamp}
              comment={comment.comment}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default Video;
