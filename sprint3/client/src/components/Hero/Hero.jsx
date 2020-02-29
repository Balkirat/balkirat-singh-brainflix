import React from "react";
import PlayIcon from "../../assets/Icons/SVG/Icon-play.svg";
import FullscreenIcon from "../../assets/Icons/SVG/Icon-fullscreen.svg";
import VolumeIcon from "../../assets/Icons/SVG/Icon-volume.svg";

let HeroVideo = props => {
  return (
    <main className="hero">
      <div className="hero__video">
        <video
          className="hero__video__poster"
          src=""
          poster={props.heroVideo.image}
        ></video>
        <div className="hero__video__buttons">
          <img
            className="hero__play-icon"
            src={PlayIcon}
            alt="Play Button icon"
          />
          <span className="hero__play-progress">
            <hr className="hero__play-progress--bar"></hr>
          </span>
          <span className="hero__time">0:00 / 0:42</span>
          <div>
            <img
              className="hero__fullscreenicon"
              src={FullscreenIcon}
              alt="Fullscreen Button Icon"
            />
            <img
              className="hero__volumeicon"
              src={VolumeIcon}
              alt="Volume Button Icon"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroVideo;
