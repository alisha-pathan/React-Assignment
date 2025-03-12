//  Task 1: 
// • Create a class component that fetches data from an API when the 
// component mounts using componentDidMount(). Display the data in the 
// component. 
// • Task 2: 
// • Implement a component that logs a message to the console when it updates 
// using componentDidUpdate(). Log another message when the component 
// unmounts using componentWillUnmount().

import React, { Component } from 'react';

class Classlifecycle extends Component {
    state = {
        product: [],
    }
    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => { return res.json() })
            .then((data) => {
                this.setState({ product: data });
            })
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.product.map((product) => (
                        <li key={product.id}>{product.id} {" : "} {product.title}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Classlifecycle;
