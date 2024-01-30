import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  const [todos,setTodos]  = useState([{
    title: "go to gym"
    ,description: "yeh to h 1 hai"
    ,completed:false
  },
{
  title: "study karlo ji"
  ,description : "ye toh ho gya aj bahut hi jyada ji"
  ,completed : false
}])

function addTodo(){
  setTodos([...todos,{

    title: "dsa ka time ho gya"
  ,description : "ye toh ho gya aj bahut hi jyada ji"
  ,completed : false

  }])
}
console.log(todos)
console.log(setTodos)

  
  return (
  
      <div>

<button onClick={addTodo}> add random todo</button>

{/* <Todo title = {todos[0].title} description ={todos[0].description}></Todo>
<Todo title = {todos[1].title} description ={todos[1].description}></Todo> */}

{todos.map((todo) =>{
  return <Todo title = {todo.title} description ={todo.description} />
})}
      </div>
   
  )
}

function Todo(props){

 
  return <div>

    <h1>{props.title}</h1>
    <h3>{props.description}</h3>

  </div>
}

// export default App
