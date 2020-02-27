import React from "react";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./styles.scss";
import Axios from "axios";
const API_URL = "http://localhost:8080";

function Upload() {
  const handleSubmit = event => {
    event.preventDefault();
    const newVideo = {
      title: event.target.title.value,
      channel: event.target.description.value,
      image: "https://i.imgur.com/yFS8EBr.jpg"
    };
    Axios.post(`${API_URL}/videos`, newVideo);
    console.log(event.target.title.value);
    console.log(event.target.description.value);
  };

  return (
    <>
      <h1 className="heading">UpLoad Video</h1>
      <div className="desktop__wrapper">
        <div className="upload-hero">
          <h4 className="upload-hero__subheading">VIDEO THUMBNAIL</h4>
          <video
            className="upload-hero__video-thumbnail"
            poster={Thumbnail}
          ></video>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="titleVideo">
            TITLE YOUR VIDEO
          </label>
          <input
            name="title"
            className="form__input"
            placeholder="Add a description of your video"
          ></input>
          <label className="form__label" htmlFor="videoDescription">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            className="form__input--height"
            placeholder="Add a description of your video"
          ></textarea>
          <div className="form__wrapper">
            <button className="form__wrapper__button">PUBLISH</button>
            <button className="form__wrapper__button--noborder">CANCEL</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Upload;
