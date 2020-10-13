/*
function Person() {

}*/

/*
var Person = function () {

};*/

import React from 'react';

const Person = (props) => {
    return (
        // <p>I'm a person and my age is {Math.floor(Math.random() * 30)}!</p>
        <div className="myBorder">
            <p>My name is {props.name} and my age is {props.age}!</p>
            <p onClick={props.clickEvent}>{props.children}</p>
            <input type="text" onChange={props.nameChangeEvent} value={props.name}/>
        </div>
    );
};

export default Person;
