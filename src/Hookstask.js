 

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
