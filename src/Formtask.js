// Task 1: 
// • Create a form with inputs for name, email, and password. Use state to control the 
// form and display the form data when the user submits it. 
// • Task 2: 
// • Add validation to the form created above. For example, ensure that the email input 
// // contains a valid email address.
import React, { useReducer, useRef } from 'react'
import "./App.css"


function Formtask() {

    let name = useRef();
    let email = useRef();
    let pass = useRef();
    let cpass = useRef();
    let obj = {
        name: '',
        email: '',
        password: '',
        cpass: '',
    }

    let reducerfun = (state, action) => {
        switch (action.type) {
            case "name":
                return { ...state, name: action.check };
            case "email":
                return { ...state, email: action.check };
            case "password":
                return { ...state, password: action.check };
            case "cpass":
                return { ...state, cpass: action.check };
            default:
                return state
        }
    }


    let [state, dispatch] = useReducer(reducerfun, obj);

    let handlesub = (e) => {
        e.preventDefault();

        if (state.name === "" || !/^[A-Za-z\s]+$/.test(state.name)) {
            alert("Name is required and check the name format");
            name.current.focus();
            // return;
        }

        if (state.email === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(state.email)) {
            alert("Email is required and check the name format");
            email.current.focus();
            // return;
        }

        if (state.password === "" ) {
            alert("Password is required and check the name format");
            pass.current.focus();
            // return;
        }

        if(state.password !== ""){
            if (state.cpass === "" || (state.password !== state.cpass)) {
                alert("confirmed pass here and Password must be same");
                cpass.current.focus();
                // return;
            }
        }


    }
    return (
        <>
            <form onSubmit={handlesub}>
                <div>
                    <label>Name</label>
                    <input type="text" value={state.name} ref={name}
                        onChange={(e) => { dispatch({ "type": "name", "check": e.target.value }) }}
                        placeholder='Enter Name' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={state.email} ref={email}
                        onChange={(e) => { dispatch({ "type": "email", "check": e.target.value }) }}
                        placeholder='Enter Email' />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" value={state.password} ref={pass}
                        onChange={(e) => { dispatch({ "type": "password", "check": e.target.value }) }}
                        placeholder='Enter Password' />
                </div>
                <div>
                    <label>Confirmed password</label>
                    <input type="password" value={state.cpass} ref={cpass}
                        onChange={(e) => { dispatch({ "type": "cpass", "check": e.target.value }) }}
                        placeholder='Confirmed Password' />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}

export default Formtask
