import React from "react";

const Comment = props => {
//  console.log("In a comment to check key", props);
  function getTime(timeStamp) {
    console.log(timeStamp);
    console.log(new Date(timeStamp));
    let commentTime = "";
    let currentTimeStamp = Date.now();
    let differenceTime = currentTimeStamp - timeStamp;
    let seconds = differenceTime / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let month = days / 30;
    let year = days / 365;
    if (seconds < 60) {
      commentTime = "Just Now";
    } else if (minutes < 60) {
      if (parseInt(minutes) === 1) {
        commentTime = parseInt(minutes) + " minute ago";
      } else {
        commentTime = parseInt(minutes) + " minutes ago";
      }
    } else if (hours < 24) {
      if (parseInt(hours) === 1) {
        commentTime = parseInt(hours) + " hour ago";
      } else {
        commentTime = parseInt(hours) + " hours ago";
      }
    } else if (days < 31) {
      console.log("in days");
      if (parseInt(days) === 1) {
        commentTime = parseInt(days) + " day ago";
      } else {
        commentTime = parseInt(days) + " days ago";
      }
    } else if (month >= 1 && month <= 12) {
      console.log("in months", month);
      if (parseInt(month) === 1) {
        commentTime = parseInt(month) + "month ago";
      } else if (parseInt(month) === 2) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 3) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 4) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 5) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 6) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 7) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 8) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 9) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 10) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 11) {
        commentTime = parseInt(month) + "months ago";
      } else if (parseInt(month) === 12) {
        commentTime = parseInt(month) + "months ago";
      }
    } else if (year >= 1) {
      console.log("in years", year);
      if (year <= 1.5) {
        commentTime = "1 year ago";
      }
      else if (year <= 2.5 && year >= 1.5) {
        commentTime = "2 years ago";
      }
      else if (year <= 3.5 && year >= 2.5) {
        commentTime = "3 years ago";
      }
      else if (year <= 4.5 && year >= 3.5) {
        commentTime = "4 years ago";
      }
    } else {
     let  check = new Date(timeStamp);
      commentTime = check.toLocaleDateString();
    }
    return commentTime;
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
