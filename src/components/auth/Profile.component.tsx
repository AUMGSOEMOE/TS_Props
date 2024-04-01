import React from 'react'

export type ProfileProps = {
    name : string
}

const profileComponent = (props: ProfileProps) => {
  return (
    <div>Private profile. Name is {props.name}</div>
  )
}

export default profileComponent