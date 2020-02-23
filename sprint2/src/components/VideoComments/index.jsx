import React from "react";

const Comment = props => {
//  console.log("In a comment to check key", props);
  function getTime(timeStamp) {
    let check = new Date(timeStamp);
    return check.toLocaleDateString();
  }

  return (
    <div className="comments__section">
      <div className="comments__section__image"></div>
      <div className="comments__section__text">
        <div className="comments__section__text--inline">
          <h3>{props.name}</h3>
          <p>{getTime(props.timestamp)}</p>
        </div>
        <p className="comments__section__text--opacity">{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
