// LAB EXERCISE 
// • Task 1: 
// • Create a functional component Greeting that accepts a name as a prop and 
// displays "Hello, [name]!". 
// • Task 2: 
// • Create a class component WelcomeMessage that displays "Welcome to React!" and 
// a render() method


//task1
import React, { Component, useState } from 'react'
function Greeting({msg,closedialogue}) {
    return(
        <>
      
            <dialog open>  <WelcomeMessage></WelcomeMessage> hello, {msg}!</dialog>
            <button onClick={closedialogue}>close</button>
        </>
    )
    
}

function React3() {
    let [name, setname] = useState("")
    let [display, setdisplay] = useState("");
    let [isopen, setopen] = useState(false);
  return (
    <>
        <input type="text" onChange={(e)=>{setname(e.target.value)}}/> 
        <button onClick={()=>{
            setdisplay(name)
            setopen(true)
        }}>click</button>

       {isopen && ( <Greeting msg = {display} closedialogue={()=>{setopen(false)}}></Greeting>)}
    </>
  )
}


//task2

class WelcomeMessage extends Component{
    render(){
        return <h1>Welcome To React !!</h1>
    }
}
export default React3
