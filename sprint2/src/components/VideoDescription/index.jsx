import React from "react";
import "../VideoDescription/styles.scss";

const Description = props => {
  return (
    <div className="description">
      <div className="description__border">
        <p className="description__text">{props.description}</p>
      </div>
    </div>
  );
};

export default Description;
