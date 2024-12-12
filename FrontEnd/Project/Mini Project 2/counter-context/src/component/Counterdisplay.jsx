
import { useCounter } from './Counter'
import CounterControls from './CounterControls'

const Counterdisplay = () => {
    const {state} = useCounter()
  return (
    <div>
      <h1 className='text-4xl text-center font-bold my-5'>Counter : {state.count}</h1>
      <CounterControls/>
     </div>
  )
}

export default Counterdisplay
