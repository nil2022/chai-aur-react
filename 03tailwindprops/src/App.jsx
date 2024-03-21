import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'
import Signup from './components/Signup'

function App() {

const myObject = {
  firstName: 'JohnDoe',
  age: 22
}

  let newArr = [1, 2, 3,'l']

  return (
    <>
      {/* <h1>Hello</h1> */}
      <Card value1='Prop1' hashTags={newArr}/>
      <Card value1='Prop2' hashTags={newArr}/>
    </>
  )
}

export default App
