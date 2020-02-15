import React from 'react';

const Description = props => {
    console.log(props);
    return (
        <>
        <p>{props.description}</p>
        </>
      );
}

export default Description;