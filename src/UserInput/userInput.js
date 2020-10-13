import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.paragraphChangedEvent} value={props.value}/>
        </div>
    )
};

export default UserInput;
