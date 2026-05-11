import { createContext } from "react";

export let UserContext=createContext()
export let UserProvider=(props)=>{
    return(
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    )
}