import { useState } from 'react';
const PersonCard = (props) => {

    const {firstName, lastName, hairColor, age} = props;
    const [state, setState] = useState(age)

    return (
        <div className="container">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {state}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={(e)=>setState(state+1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default PersonCard