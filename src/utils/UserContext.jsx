import { createContext, useEffect, useState } from "react";

export let UserContext = createContext()
export let UserProvider = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)
    useEffect(() => {
        let storeToken = JSON.parse(localStorage.getItem("authToken"))
        setToken(storeToken)
        console.log(storeToken)
    }, [token])

    return (
        <UserContext.Provider value={{ username, setUsername, email, setEmail, password, setPassword, token, setToken }}>
            {props.children}
        </UserContext.Provider>
    )
}