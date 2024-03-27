import React, { useState } from 'react'

const LoggedInComponent = () => {
    const [login,setLogin] = useState(false)

    const handleLogin =() => {
        setLogin(true)
    }

    const handleLogout =() => {
        setLogin(false)
    }

  return (
    <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
        <div>you are {login ? "Logged In" : "Logged Out"}  the application</div>
    </div>
  )
}

export default LoggedInComponent