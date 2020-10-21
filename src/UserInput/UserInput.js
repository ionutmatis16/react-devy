import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.paragraphChangedEvent} value={props.value}/>
        </div>
    )
};

export default userInput;
