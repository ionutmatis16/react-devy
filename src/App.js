import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <h1>Hello, I'm a React app</h1>
      </div>
    );
    // React.createElement(element, config, children);
    // return React.createElement('div', null, 'h1', 'hello, i\'m a React app');
    /*return React.createElement('div', {
            id: 'myDiv',
            className: 'App'
        },
        React.createElement('h1', null, 'Hello, i\'m a React app'));*/
}

export default App;
