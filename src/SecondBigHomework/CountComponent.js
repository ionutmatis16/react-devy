import React from 'react';

const countComponent = (props) => {
    return (
        <div>
            <input type="text" onChange={props.onCountInputChangeHandler} value={props.value}/>
            <p>Number of characters: {props.value.length}</p>
        </div>
    );
};

export default countComponent;
