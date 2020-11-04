import React from 'react';
import Person from "./Person/Person";

const persons = (props) => {
    return (
        <div>
            {
                props.persons.map(person =>
                    <div key={person.id}>
                        <Person name={person.name}
                                age={person.age}
                                clickEvent={() => props.deletePersonHandler(person.id)}
                                nameChangeEvent={(event) => props.nameChangedHandler(person.id, event)}>
                        </Person>
                    </div>
                )
            }

            {/*<button onClick={() => this.switchNamesHandler("devy")}>Switch names</button>*/}
            <button onClick={() => props.switchNamesHandler("Devy2")}>
                Switch names
            </button>
        </div>
    );
};

export default persons;
