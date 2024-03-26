import React from 'react'
import { Reuse } from './Reuse'



const ContainerComponent = ({styles,children}: Reuse) => {
  return (
    <div style={styles}>{children}</div>
  )
}

export default ContainerComponent