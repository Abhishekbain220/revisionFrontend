import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import AboutUs from './components/AboutUs'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/updateUser" element={<UpdateUser/>}/>
      </Routes>
    </div>
  )
}

export default App