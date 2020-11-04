/*
function Person() {

}*/

/*
var Person = function () {

};*/

import React from 'react';
// import './Person.module.css';
import classes from './Person.module.css';
// the class will be name Person_Person__3E6hk
// and will only work for this person file

const person = (props) => {
    return (
        // <p>I'm a person and my age is {Math.floor(Math.random() * 30)}!</p>
        <div className={classes.Person}>
            <p>My name is {props.name} and my age is {props.age}!</p>
            <input type="text" onChange={props.nameChangeEvent} value={props.name}/>
            <button onClick={props.clickEvent}>Delete</button>
        </div>
    );
};

export default person;
