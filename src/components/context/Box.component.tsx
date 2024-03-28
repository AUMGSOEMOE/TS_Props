import React,{useContext} from 'react'
import {themeContext} from "./Context.component"


type Props = {}

const BoxComponent = (props: Props) => {
  const theme = useContext(themeContext)
  return <div style={{backgroundColor:theme.primary.main , color: theme.secondary.text}}>Theme BOx</div>
}

export default BoxComponent