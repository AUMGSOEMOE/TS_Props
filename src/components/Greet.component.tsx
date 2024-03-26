import React from 'react'

type Greet = {
    name:string,
    amount?:number,
    right:boolean
}

const GreetComponent = (props: Greet) => {
  const {amount = 0} = props
  return (
    <div>
        {
            props.right ? <h2>Welcome {props.name},You have {amount} unread message</h2> : <div>Welcome Guest</div>
        }</div>
  )
}

export default GreetComponent