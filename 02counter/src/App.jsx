import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(16)  // tHis iS a HooK
  // [any variable name (value to set, update), function name() any name to control the value defined in variable]

  // let counter = 15; //hard-coded value

  const addValue = () => {
    if(counter != 20) {
      // counter+=1;
      setCounter(counter+1) //update in DOM (UI)
    // console.log('clicked', counter);
    setCounter(nannare => nannare+1)
    /** setCounter takes a callback function which 
     * takes the previous value as an argument 
     * and process it
     *  */ 
    }
  }

  const removeValue = () => {
    if(counter != 10) {
      setCounter(counter -1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
