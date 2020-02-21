import React from "react";
import uploadIcon from "../../assets/Icons/SVG/Icon-upload.svg";

function UploadButton() {
  return (
    <button className="header__button--upload">
      <img src={uploadIcon} className="header__button--icon" alt=""></img>UPLOAD
    </button>
  );
}

export default UploadButton;
