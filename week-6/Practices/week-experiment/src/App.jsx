import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './component/Header'
import { CreateTodo } from './component/CreateTodo'
import { Todo } from './component/Todo'


function App() {

  // const [name, setName] = useState("Pravin")
  const[todo,setTodo] = useState([{id : 1,title:"1st todo",description:"1st description"},
  {
    id: 2,
    title:"2nd todo",
    description:"2nd descrition"
  
  }])

  return (
   <div>
    
    <CreateTodo   todos = {todo} key ={todo.id} setTodo = {setTodo} />
    <Todo todos={todo} />
    {/* <Header  name = {name} setName = {setName} />
    <Heaxder  name = "kirat" />
    <Header  name = "kirat" /> */}

 
   </div>
  )
}


// export default App
