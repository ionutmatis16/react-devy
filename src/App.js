import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from './components/Persons/Persons';
import CountComponent from "./SecondBigHomework/CountComponent";
import ValidationComponent from "./SecondBigHomework/ValidationComponent";
import CharComponent from "./SecondBigHomework/CharComponent";
import Radium from 'radium';
import Cockpit from "./components/Cockpit/Cockpit";

class App extends Component {

    state = {
        persons: [
            {id: '0', name: "Devy", age: '28'},
            {id: '1', name: "Andreas", age: '27'},
            {id: '2', name: "Alex", age: '26'},
            {id: '3', name: "Andrei", age: '25'},
            {id: '4', name: "Ionut", age: '23'},
        ],
        applicationTitle: 'My application',
        showPersons: true,

        // first homework
        texts: [
            {firstParagraph: 'da', secondParagraph: 'dada'},
            {firstParagraph: 'nu', secondParagraph: 'nunu'},
            {firstParagraph: 'ce', secondParagraph: 'cece'}
        ],
        // second homework
        inputToCount: '',
        inputToCountTouched: false
    }

    switchNamesHandler = (name) => {
        // this.state.persons[0].name = "Devy duplicat"; // wrong
        let newPersons = [...this.state.persons];
        newPersons[0].name = name;

        this.setState({
            persons: newPersons
        });
    };

    togglePersons = () => {
        this.setState({showPersons: !this.state.showPersons});
    }

    nameChangedHandler = (personId, event) => {
        let personIndex = this.state.persons
            .findIndex(person => person.id === personId);

        const newPerson = {...this.state.persons[personIndex]};
        newPerson.name = event.target.value

        const persons = [...this.state.persons];
        persons[personIndex] = newPerson;

        this.setState({
            persons: persons
        });
    };

    changeParagraphHandler = (value) => {
        let texts = [...this.state.texts];
        texts[0].firstParagraph = value;

        this.setState({texts});
    };

    paragraphChangedHandler = (event) => {
        let texts = [...this.state.texts];
        texts[0].firstParagraph = event.target.value;

        this.setState({texts});
    }

    deletePersonHandler = (id) => {
        const persons = this.state.persons
            .filter(person => person.id !== id);
        this.setState({persons});
    }

    onInputToCountChangeHandler = (event) => {
        this.setState({
            inputToCount: event.target.value,
            inputToCountTouched: true
        });
    }

    onCharClickHandler = (index) => {
        let input = [...this.state.inputToCount];
        input.splice(index, 1);
        this.setState({
            inputToCount: input.join('')
        });
    }

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               nameChangedHandler={this.nameChangedHandler}
                               deletePersonHandler={this.deletePersonHandler}
                               switchNamesHandler={this.switchNamesHandler}/>
        }

        return (
            <div>
                <div className={classes.App}>
                    {/*<UserInput paragraphChangedEvent={this.paragraphChangedHandler}
                               value={this.state.texts[0].firstParagraph}/>
                    <UserOutput text={this.state.texts[0]}/>
                    <br/>
                    <UserOutput text={this.state.texts[1]}/>
                    <br/>
                    <UserOutput text={this.state.texts[2]}/>
                    <button onClick={this.changeParagraphHandler.bind(this, "Changed")}>Change first paragraph</button>

                    <div style={{marginBottom: 200}}/>*/}
                    {/*<h1>Hello, I'm a React app</h1>*/}

                    <h1>Big second homework</h1>
                    <CountComponent onCountInputChangeHandler={this.onInputToCountChangeHandler}
                                    value={this.state.inputToCount}/>
                    <ValidationComponent inputTextLength={this.state.inputToCount.length}
                                         inputTouched={this.state.inputToCountTouched}/>
                    {
                        this.state.inputToCount.split('').map((inputChar, index) =>
                            <span key={index}>
                                <CharComponent character={inputChar} onCharClick={this.onCharClickHandler.bind(this, index)}/>
                            </span>
                        )
                    }
                    <Cockpit personslength={this.state.persons.length}
                             applicationTitle={this.state.applicationTitle}
                             togglePersons={this.togglePersons}
                             showPersons={this.state.showPersons}/>
                    {
                        persons
                    }
                    {/*https://reactjs.org/docs/events.html#supported-events*/}
                </div>

            </div>
        );
    }

    // React.createElement(element, config, children);
    // return React.createElement('div', null, 'h1', 'hello, i\'m a React app');
    /*return React.createElement('div', {
            id: 'myDiv',
            className: 'App'
        },
        React.createElement('h1', null, 'Hello, i\'m a React app'));*/
}

export default Radium(App);
