import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './data/lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='foodMenu'> 
   <h1> Välkommen </h1>
   <Menu /> 
   </div>
    </>
  )
}

export default App
