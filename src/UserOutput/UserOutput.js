import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>First paragraph: {props.text.firstParagraph}</p>
            <p>Second paragraph: {props.text.secondParagraph}</p>
        </div>
    )
};

export default userOutput;
