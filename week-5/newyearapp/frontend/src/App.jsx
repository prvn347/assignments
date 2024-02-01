import React from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import './App.css'; // Make sure to include your styles
import { useEffect, useState } from 'react';



function App() {
 

  const [todos,setTodos] = useState([])
   
    useEffect(() => {
      // Runs ONCE after initial rendering
      // and after every rendering ONLY IF `prop` or `state` changes
      fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
          setTodos(json.todos);
        
      })
    }, todos);
  


 
  return (
    <div>
      <CreateTodo  todos = {todos} setTodos = {setTodos} />
      <Todos
        todos={todos}
      />
    </div>
  );
}

export default App;

