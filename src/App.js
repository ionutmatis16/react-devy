import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

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
        texts: [
            {firstParagraph: 'da', secondParagraph: 'dada'},
            {firstParagraph: 'nu', secondParagraph: 'nunu'},
            {firstParagraph: 'ce', secondParagraph: 'cece'}
        ],
        showPersons: true
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

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map(person =>
                            <div key={person.id}>
                                <Person name={person.name}
                                        age={person.age}
                                        clickEvent={this.deletePersonHandler.bind(this, person.id)}
                                        nameChangeEvent={this.nameChangedHandler.bind(this, person.id)}>
                                </Person>
                            </div>
                        )
                    }

                    {/*<button onClick={() => this.switchNamesHandler("devy")}>Switch names</button>*/}
                    <button onClick={this.switchNamesHandler.bind(this, "Devy2")}>
                        Switch names
                    </button>
                </div>
            );
        }

        return (
            <div>
                <div className="App">
                    <UserInput paragraphChangedEvent={this.paragraphChangedHandler}
                               value={this.state.texts[0].firstParagraph}/>
                    <UserOutput text={this.state.texts[0]}/>
                    <br/>
                    <UserOutput text={this.state.texts[1]}/>
                    <br/>
                    <UserOutput text={this.state.texts[2]}/>
                    <button onClick={this.changeParagraphHandler.bind(this, "Changed")}>Change first paragraph</button>

                    <div style={{marginBottom: 200}}/>
                    {/*<h1>Hello, I'm a React app</h1>*/}
                    <p>{this.state.applicationTitle}</p>

                    {
                        persons
                    }

                    <button onClick={this.togglePersons}>Toggle persons</button>
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

export default App;
