// LAB EXERCISE 
// • Task 1: 
// • Create a React component UserCard that accepts name, age, and location as props 
// and displays them in a card format. 
// • Task 2: 
// • Create a Counter component with a button that increments a count value using 
// React state. Display the current count on the screen.

import React, { useReducer, useState } from 'react'


function Cardcomponenet() {


    let func = (state, action) => {
        switch (action.type) {
            case "updatename":
                return { ...state, name: action.name }
            case "updateage":
                return { ...state, age: action.age }
            case "updatelocation":
                return { ...state, location: action.location }
            default:
                return state;

        }
    }
    let obj =
    {
        name: '',
        age: '',
        location: ''
    };


    let [state, dispatch] = useReducer(func, obj);
    let [val, setval] = useState(false)
    return (
        <>
            <div>
                <label>Name</label>  :
                <input type="text" value={state.name}
                    onChange={(e) => { dispatch({ type: "updatename", name: e.target.value }) }}
                />
            </div>
            <div>
                <label>Age</label> :
                <input type="text" value={state.age}
                    onChange={(e) => { dispatch({ type: "updateage", age: e.target.value }) }}
                />
            </div>
            <div>
                <label>location</label> :
                <input type="text" value={state.location}
                    onChange={(e) => {
                        dispatch({ type: "updatelocation", location: e.target.value })
                    }} />
            </div>

            <div><button onClick={() => { setval(true) }}>click</button></div>

            {val && <Displaydata data={state}></Displaydata>}
        </>
    )
}

function Displaydata({ data }) {

    let [bor, setborder] = useState(1)
    let usercard = {
        border: `${bor}px solid #ddd`,
        padding: '20px',
        borderRadius: '10px',
        marginTop: '20px',
        maxWidth: '300px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }
    return (
        <>
            <div>
                <button onClick={() => {
                    setborder(--bor)
                }}>-</button>
                {bor}
                <button onClick={() => {
                    setborder(++bor)
                }}>+</button>
            </div>

            <div style={usercard}>
                <h3>User Information</h3>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Age:</strong> {data.age}</p>
                <p><strong>Location:</strong> {data.location}</p>
            </div>




        </>
    )
}

export default Cardcomponenet
