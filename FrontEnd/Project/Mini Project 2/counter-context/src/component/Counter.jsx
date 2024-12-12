import { useContext, createContext, useReducer } from "react";
// Create Context
const Counter = createContext();
const INCREMENT = "INCREMENT";
const DECREMENT = " DECREMENT";
const RESET = "RESET";
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
      default:
        throw new Error('Unknown action type' + action.type );
  }
};
const CounterProvider = ({children})=>{
    const [state, dispatch] = useReducer(counterReducer,{count :0})
    const increment = ()=> dispatch({type:INCREMENT})
    const decrement = ()=> dispatch({type:DECREMENT})
    const reset = ()=> dispatch({type:RESET})

    return(
<Counter.Provider value={{state,increment,decrement,reset}}>{children}</Counter.Provider>
    )
}
const useCounter = () =>{
    return useContext(Counter)
}


export {useCounter , CounterProvider}