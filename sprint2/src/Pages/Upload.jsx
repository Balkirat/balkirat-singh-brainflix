import React, { Component } from "react";

import Thumbnail from "../assets/Images/Upload-video-preview.jpg";
import "./styles.scss";

function Upload() {
  return (
    <>
      <h1>UpLoad Video</h1>
      <div className="hero">
        <h4 className="hero__subheading">VIDEO THUMBNAIL</h4>
        <video className="hero__video-thumbnail" poster={Thumbnail}></video>
      </div>
      <form className="form">
        <label className="form__label" for="titleVideo">TITLE YOUR VIDEO</label>
        <input className="form__input" placeholder="Add a description of your video"></input>
        <label className="form__label" for="videoDescription">ADD A VIDEO DESCRIPTION</label>
        <input className="form__input--height" placeholder="Add a description of your video"></input>
        <button className="form__button" >PUBLISH</button>
        <button className="form__button--noborder">CANCEL</button>
      </form>
    </>
  );
}

export default Upload;
