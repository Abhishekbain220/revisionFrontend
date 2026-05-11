import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App