import axios from '../utils/axios'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../utils/UserContext'

const Nav = () => {
  let {username, setUsername, email, setEmail, password, setPassword, token, setToken}=useContext(UserContext)
  let navigate=useNavigate()

  let logoutHandler=async()=>{
    try {
      let logoutUser=await axios.get("/user/logout")
      localStorage.removeItem("authToken")
      setToken(null)
      navigate("/signup")
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutUs">About</Link>
            <Link to="/signup">Signup</Link>
            <Link onClick={logoutHandler}>Logout</Link>
            {token ? <Link to="/updateUser" >UpdateUser</Link>: null}
        </nav>
    </div>
  )
}

export default Nav