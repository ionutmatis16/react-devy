import React, {Component} from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {

    state = {
        persons: [
            {name: "Devy", age: '28'},
            {name: "Andreas", age: '27'},
            {name: "Alex", age: '26'},
            {name: "Andrei", age: '25'},
            {name: "Ionut", age: '23'},
        ],
        applicationTitle: 'My application'
    }

    switchNamesHandler = (name) => {
        // this.state.persons[0].name = "Devy duplicat"; // wrong
        let newPersons = [...this.state.persons];
        newPersons[0].name = name;

        this.setState({
            persons: newPersons
        });
    };

    nameChangedHandler = (event) => {
        let newPersons = [...this.state.persons];
        newPersons[0].name = event.target.value;

        this.setState({
            persons: newPersons
        });
    };

    render() {
        return (
            <div>
                <div className="App">
                    {/*<h1>Hello, I'm a React app</h1>*/}
                    <p>{this.state.applicationTitle}</p>
                    <Person name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                            clickEvent={this.switchNamesHandler.bind(this, "Devy1")}
                            nameChangeEvent={this.nameChangedHandler}>
                        Hobbies
                    </Person>
                    <Person name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            clickEvent={this.switchNamesHandler.bind(this, "Devy2")}
                            nameChangeEvent={this.nameChangedHandler}>
                        Hobbies
                    </Person>
                    <Person name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                            clickEvent={this.switchNamesHandler.bind(this, "Devy3")}
                            nameChangeEvent={this.nameChangedHandler}>
                        Hobbies
                    </Person>
                    <Person name={this.state.persons[3].name}
                            age={this.state.persons[3].age}
                            clickEvent={this.switchNamesHandler.bind(this, "Devy4")}
                            nameChangeEvent={this.nameChangedHandler}>
                        Hobbies
                    </Person>
                    {/*<button onClick={() => this.switchNamesHandler("devy")}>Switch names</button>*/}
                    <button onClick={this.switchNamesHandler.bind(this, "Devy2")}>Switch names</button>
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
