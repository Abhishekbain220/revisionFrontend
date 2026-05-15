import React, { useContext } from 'react'
import { UserContext } from '../utils/UserContext'
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  let { username, setUsername, email, setEmail, password, setPassword, token, setToken } = useContext(UserContext)
  let navigate = useNavigate()
  let submitHandler = async (e) => {
    try {
      e.preventDefault()
      let user = { username, email, password }
      let createUser = await axios.post("/user/signup", user)
      localStorage.setItem("authToken", JSON.stringify(createUser.data.token))
      setToken(createUser.data.token)
      setUsername("")
      setEmail("")
      setPassword("")
      navigate("/")

    } catch (error) {
      console.log(error.response.data.message)
    }

  }
  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' />
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup