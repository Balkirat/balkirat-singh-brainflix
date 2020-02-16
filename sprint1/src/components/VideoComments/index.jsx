import React from "react";

const Comment = props => {
  console.log(props);
  return (
    <div className="comments__section">
      <div class="comments__section__image"></div>
      <div className="comments__section__text">
        <h2>{props.name}</h2>
        <p>{props.timestamp}</p>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
