import React from "react";
import "../VideoDescription/styles.scss";

const Description = props => {
  console.log(props);
  return (
    <div className="description">
      <p className="description__text">{props.description}</p>
    </div>
  );
};

export default Description;
