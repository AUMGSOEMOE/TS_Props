import React, { useState } from 'react'

type userProps = {
    name:string 
    email:string
}

const UserComponent = (props: userProps) => {
    const [data,setData] = useState<userProps>({} as userProps)
    const handleLogin =() => {
        setData({
            name : props.name,
            email : props.email
        })
    }
  return (
    <div>
    <button onClick={handleLogin}>Log In</button>
    <div>
        <p>your name is {data.name}</p>
        <p>Your email is {data.email}</p>
         </div>
</div>
  )
}

export default UserComponent