import { useState } from 'react'
import Body from './components/Body'
import NavBar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <NavBar></NavBar>
  <Body></Body>
</div>
       
    </>
  )
}

export default App
