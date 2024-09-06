import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addvalues = () => {
    if(counter<20){
      setCounter(counter+1);
    }
    
  } 
  const removevalues = () => {
    if(counter>1){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Counter here</h1>
      <h2>click to count or decount the values </h2>
      <div><button onClick={addvalues}>Add value  {counter}</button></div>
      <div><button onClick={removevalues}>Delete value  {counter}</button></div>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
