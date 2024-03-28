import React, { createContext, useContext } from 'react'
import { UserContext } from './UserContext.component'

type Props = {}



const UserComponent = (props: Props) => {
    const userContext = useContext(UserContext)
    const loginhandle =() => {
        userContext.setUser({
            name: "AGOE",
            email : "agoe@gmail.com"
        })
    }
    
    const logouthandle =() => {
        userContext.setUser(null)
    }
  return (
    <div>
        <button onClick={loginhandle}>Log in</button>
        <button onClick={logouthandle}>Log out</button>

        <div>your name is {userContext.user?.name} </div>
        <div>your email is {userContext.user?.email} </div>

    </div>
  )
}

export default UserComponent