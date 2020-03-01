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
      description: event.target.description.value,
      image: "https://i.imgur.com/wpb4SD9.jpg"
    };
    Axios.post(`${API_URL}/videos`, newVideo);
    event.target.reset();
  };

  return (
    <>
      <h1 className="heading">UpLoad Video</h1>
      <div className="upload__wrapper">
        <section className="upload__hero">
          <h4 className="upload__hero__subheading">VIDEO THUMBNAIL</h4>
          <video
            className="upload__hero__video-thumbnail"
            poster={Thumbnail}
          ></video>
        </section>
        <form className="upload__form" onSubmit={handleSubmit}>
          <label className="upload__form__label" htmlFor="titleVideo">
            TITLE YOUR VIDEO
          </label>
          <input
            name="title"
            className="upload__form__input"
            placeholder="Add a description of your video"
          ></input>
          <label className="upload__form__label" htmlFor="videoDescription">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            className="upload__form__input--height"
            placeholder="Add a description of your video"
          ></textarea>
          <div className="upload__form__wrapper">
            <button className="upload__form__wrapper__button">PUBLISH</button>
            <button className="upload__form__wrapper__button--noborder">CANCEL</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Upload;
