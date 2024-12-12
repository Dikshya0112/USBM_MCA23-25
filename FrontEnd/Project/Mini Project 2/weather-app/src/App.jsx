import Button from "./components/Button"
import Card from "./components/Card"
import Searchbar from "./components/Searchbar"
import './App.css'
function App() {


  return (
    <>
    <div className="border-2 shadow-lg mx-10 my-10">
   <h1 className="text-center text-4xl">Weather Forcast</h1>
   <Searchbar/> 
  
   <Card/>
   <Button value='refresh'/>
    </div></>
  )
}

export default App
