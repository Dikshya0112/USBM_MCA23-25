
import { useCounter } from './Counter'

const CounterControls = () => {
  const {increment, decrement, reset} = useCounter()
    return (

       <div className='flex items-center justify-center gap-3 py-5'>
      <button className='bg-yellow-500 hover:bg-yellow-600 px-3 py-1 text-2xl font-semibold border-2 rounded-lg' onClick={increment}>Increment</button>
      <button className='bg-red-400 px-3 py-1 border-2 hover:bg-red-500 text-2xl font-semibold rounded-lg' onClick={decrement}>Decrement</button>
      <button className='bg-green-500 px-3 py-1 border-2 hover:bg-green-600 text-2xl font-semibold rounded-lg' onClick={reset}>Reset</button>
    </div>

  )
}

export default CounterControls
