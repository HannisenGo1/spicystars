import { useState } from 'react'

import './App.css'
import Menu from './data/lista'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
	
   <div className='foodMenu'> 
   <Menu /> 
   <Form/>
   </div>
    </>
  )
}

export default App
