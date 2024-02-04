import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";




function App() {
  
const [id ,setId] = useState(1)


  return (
    <div>
<button  onClick={() =>
{
  setId(id +1)
}} >Next</button>
<Todos id = { id} />


    
    </div>
  );
}

function Todos(props){
  const [todos, setTodos] = useState([]);

useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(res){

      setTodos(res.data.todos)
    })
  }, [props.id]);

  return <div>
  <Todo todoss={todos} />
  </div>
}

function Todo({ todoss }) {
  return (
    <div>
      {todoss.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h4>{todo.description}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
