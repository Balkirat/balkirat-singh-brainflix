import React from "react";

const Comment = props => {
  console.log(props);
  return (
    <div className="comments__section">
      <div className="comments__section__image"></div>
      <div className="comments__section__text">
        <div className="comments__section__text--inline">
          <h3>{props.name}</h3>
          <p>{props.timestamp}</p>
        </div>
        <p className="comments__section__text--opacity">{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
