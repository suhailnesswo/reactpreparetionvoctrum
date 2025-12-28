import React from 'react';

function UseSecondCompoundState() {
    let [state, setState] = React.useState(0);
    return (
        <div>
            <h1>Second Compound State: {state}</h1>
            <button onClick={() => setState(state + 1)}>Increment</button>
        </div>
    );
}
export default UseSecondCompoundState;