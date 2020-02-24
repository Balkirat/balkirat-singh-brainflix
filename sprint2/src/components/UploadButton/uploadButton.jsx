import React from "react";
import uploadIcon from "../../assets/Icons/SVG/Icon-upload.svg";

function UploadButton() {
  return (
    <button className="header__button--upload header__button">
      <img src={uploadIcon} className="header__button--icon" alt=" + sign"></img>UPLOAD
    </button>
  );
}

export default UploadButton;
