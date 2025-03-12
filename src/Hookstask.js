//  <!-- Task 1: 
// • Create a functional component with a counter using the useState() hook. Include 
// buttons to increment and decrement the counter. 
// • Task 2: 
// • Use the useEffect() hook to fetch and display data from an API when the 
// component mounts. 
// • Task 3: 
// • Create react app with use of useSelector & useDispatch.  
// • Task 4: 
// • Create react app to avoid re-renders in react application by useRef  ? -->

import React, { useEffect, useState } from 'react'

function Hookstask() {
    let [state, setstate] = useState([]);
    let [count, setcount] = useState(1);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => { return res.json() })
            .then((data) => {
                setstate(data)
            })
    }, [])
    return (
        <>

            <h1>counter</h1>

            <div>
                <button onClick={() => {
                    setcount(count - 1)
                }}>-</button>
                {count}
                <button onClick={() => {
                    setcount(count + 1)
                }}>+</button>
            </div>
            {
                <ul>
                    {state.map((product) => (
                        <li key={product.id}>{product.id} {" : "} {product.title}</li>
                    ))}
                </ul>
            }
        </>
    )
}

export default Hookstask
