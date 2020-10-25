import React from 'react';

const charComponent = (props) => {
    return (
        <span className="charClass" onClick={props.onCharClick}>
            {props.character}
        </span>
    );
}

export default charComponent;
