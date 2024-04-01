import React, { Component } from 'react'
import LoginComponent from './Login.component'
import { ProfileProps } from './profile.component'

type PrivateProps = {
  isLoggedIn : boolean,
  Component : React.ComponentType<ProfileProps>
}

const PrivateComponent = ({isLoggedIn ,Component}: PrivateProps) => {
  if(isLoggedIn){
    return <Component name="AGOE" />
  }else{
    return <LoginComponent />
  }
}

export default PrivateComponent