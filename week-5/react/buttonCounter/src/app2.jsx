import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

//   const [todos,setTodos]  = useState([{
//     title: "go to gym"
//     ,description: "yeh to h 1 hai"
//     ,completed:false
//   },
// {
//   title: "study karlo ji"
//   ,description : "ye toh ho gya aj bahut hi jyada ji"
//   ,completed : false
// }])

// function addTodo(){
//   setTodos([...todos,{

//     title: "dsa ka time ho gya"
//   ,description : "ye toh ho gya aj bahut hi jyada ji"
//   ,completed : false

//   }])
// }
console.log(count)
console.log(setCount)

  
  return (
  
      <div>

{/* <button onClick={addTodo}> add random todo</button> */}
{/* 
<Todo title = {todos[0].title} description ={todos[0].description}></Todo>
<Todo title = {todos[1].title} description ={todos[1].description}></Todo> */}

{/* {todos.map((todo) =>{
  return <Todo title = {todo.title} description ={todo.description} />
})} */}
<Button puranaCount = {count} setPuranaCount = {setCount}  ></Button>
<DeleteButton puranaCount = {count} setPuranaCount = {setCount}></DeleteButton>
      </div>
   
  )
}

function DeleteButton(props){
    function onclickhandler(){
        props.setPuranaCount(props.puranaCount - 1);
    }

 
  return <div>
    <button onClick={onclickhandler}>
       Decrement by 1

    </button>

  </div>
}

function Button(props){
    function onclickhandler(){
        props.setPuranaCount(props.puranaCount + 1);
    }

 
  return <div>
    <button onClick={onclickhandler}>
        Coutner :{props.puranaCount}

    </button>

  </div>
}

export default App
