import { useReducer } from "react"

type stateProp = {
    count : number
}

type updateProp = {
    type : "increment" | "decrement"
    payload : number
}

type resetProp = {
    type : "reset"
}

type actionProp = updateProp | resetProp


const initialState = {count : 0}

function reducer(state:stateProp,action:actionProp) {
    switch (action.type) {
        case 'increment' : {
            return {count : state.count + action.payload}
        }
        case 'decrement' : {
            if(state.count===0){
                return {count : state.count }
            }else{
                return {count : state.count - action.payload}
            }
        }
        case 'reset' : return initialState
        default :
             return state
    }
}

const Counter = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (<>
        Count :{state.count}
        <button onClick={() => dispatch({type : 'increment',payload : 10})}>add</button>
        <button onClick={() => dispatch({type : 'decrement',payload : 10})}>Sus</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>


    </>)
}

export default Counter