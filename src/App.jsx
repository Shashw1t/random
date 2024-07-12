import {useState} from "react";
import './App.css'


function App() {
  const [todos , setTodos] = useState([{
    title: "go to gym",
    decription: "go to gym from 7-8",
    completed: false
  },
  {
    title: "study DSA",
    decription: "study DSA from 9-10",
    completed: true
  }])

  return (
      <div>
       {JSON.stringify(todos)}
      </div>
  )
}



export default App
