import axios from '../utils/axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../utils/UserContext'

const UpdateUser = () => {
    let {username,email,password,setUsername,setEmail,setPassword,token,setToken}=useContext(UserContext)
    useEffect(() => {
        const getUser = async () => {
            try {
                let user = await axios.get("/user/currentUser")
                console.log(user.data.user)
                setUsername(user.data.user.username)
                setEmail(user.data.user.email)
                setPassword(user.data.user.password)
            } catch (error) {
                console.log(error.response?.data?.message)
            }
        }

        getUser()
    }, []) // 👈 empty dependency array = run once
    

    let navigate=useNavigate()
    
    let submitHandler=async(e)=>{
        try {
            e.preventDefault()
            let user={username,email,password}
            let updateUser=await axios.put("/user/updateUser",user)
            navigate("/")
            setUsername("")
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler} action="">
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} name='username' placeholder='Enter Username' />
                <input type="email" name="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} id="" />
                <input type="password" name="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} id="" />
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateUser