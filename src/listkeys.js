// Task 1: 
// • Create a React component that renders a list of items (e.g., a list of fruit names). 
// Use the map() function to render each item in the list. 
// • Task 2: 
// • Create a list of users where each user has a unique id. Render the user list 
// using React and assign a unique key to each user.

import React from 'react'

let arr = ["Apple", "Guaua", "Strwberry"]
function Listkeys() {
    return (
        <>
            <p> List ITems of Fruits</p>

            <ul>
                {
                arr.map((v, i) =>
                    <li key={i}>{v}</li>)
                }
            </ul>

        </>
    )
}

export default Listkeys
