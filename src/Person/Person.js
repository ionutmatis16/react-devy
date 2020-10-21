/*
function Person() {

}*/

/*
var Person = function () {

};*/

import React from 'react';

const person = (props) => {
    return (
        // <p>I'm a person and my age is {Math.floor(Math.random() * 30)}!</p>
        <div className="myBorder">
            <p>My name is {props.name} and my age is {props.age}!</p>
            <input type="text" onChange={props.nameChangeEvent} value={props.name}/>
            <button onClick={props.clickEvent}>Delete</button>
        </div>
    );
};

export default person;
