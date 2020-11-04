import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    /*const buttonStyle = {
            backgroundColor: 'green',
            border: '1px solid blue',
            padding: "8px",
            cursor: 'pointer',
            ":hover": {
                // because of radium
                backgroundColor: 'green'
            }
        }*/

    let paragraphClasses = [];
    if (props.personslength < 3) {
        paragraphClasses.push(classes.red);
    }
    if (props.personslength < 2) {
        paragraphClasses.push(classes.bold);
    }

    let buttonClass = null;
    if (props.showPersons) {
        buttonClass = classes.HidePersons;
    }

    //buttonStyle.backgroundColor = 'red';

    return (
        <div className={classes.Cockpit}>
            <h1 style={{marginTop: 200}}>{props.applicationTitle}</h1>
            <p className={paragraphClasses.join(" ")}>Welcome to my React app</p>
            <button onClick={props.togglePersons}
                    className={buttonClass}
                /*style={buttonStyle}*/>
                Toggle persons
            </button>
        </div>
    );
}

export default cockpit;
