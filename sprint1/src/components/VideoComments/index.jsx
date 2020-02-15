import React from 'react';

const Comment = props => {
    console.log(props);
    return (
        <>
        <h2>{props.name}</h2>
        <p>{props.timestamp}</p>
        <p>{props.comment}</p>
        </>
      );
}

export default Comment;