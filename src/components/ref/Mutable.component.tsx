import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const MutableComponent = (props: Props) => {
    const [timer,setTimer] = useState(0)

    const valueRef = useRef<number | undefined>(undefined)

    const stopTimer = () => {
        window.clearInterval(valueRef.current)
    }

    useEffect(() => {
        valueRef.current = window.setInterval(()=>{
            setTimer(timer => timer + 1)
        },1000)   

        return () =>{
            stopTimer()
        }
    },[])
  return (
    <div>
        Hook - {timer}
        <button onClick={() => stopTimer()}>stop</button>
    </div>
  )
}

export default MutableComponent