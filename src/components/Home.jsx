import React, { useContext, useEffect } from 'react'
import { UserContext } from '../utils/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'

const Home = () => {
    let {username, setUsername, email, setEmail, password, setPassword, token, setToken}=useContext(UserContext)
    let navigate=useNavigate()
    
    let getUser=async()=>{
    try {
      let user=await axios.get("/user/currentUser")
    } catch (error) {
      console.log(error.response.data.message)
      localStorage.removeItem("authToken")
      setToken(null)
    }
  }
  useEffect(() => {
    if (!token) {
      navigate("/signUp")
    }else{
      getUser()
    }


  }, [token,navigate])
  return (
    <div>Home</div>
  )
}

export default Home