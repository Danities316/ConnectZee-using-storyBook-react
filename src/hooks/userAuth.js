import { createContext, useContext, useEffect, useState } from "react";
import {auth, init, login as AuthLogin, logOut as AuthLogOut } from "../lib/Auth";

export const AuthContext = createContext();

export const AuthProvider = ({children }) =>{
const [user, setUser] = useState()
    useEffect(() =>{
        init( (user) =>{
            setUser(user)
        });

auth.on('login', setUser);

return () =>{
    auth.off('login', setUser)
}

    }, []);


  function Login(){
    AuthLogin((user) =>{
        setUser(user)
    });
  }

  function LogOut(){
    AuthLogOut(() =>{
        setUser(undefined)
    });
  }


const contextValue = {
    user,
    Login,
    LogOut
}
    return (

<AuthContext.Provider value={ contextValue }>
    { children}
</AuthContext.Provider>

    )
}

export function userAuth() {
 return useContext(AuthContext)
}