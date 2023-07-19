import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import MyNavbar from './components/Navbar'
import Projects from './pages/Projects'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyNavbar/>
       <Routes>
       <Route path="/projects" element={<Projects/>} />
        <Route path="/" element={<Homepage/>} /> 
      </Routes>
    </>
  )
}

export default App
