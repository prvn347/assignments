import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://sum-server.100xdevs.com/todos");
        const json = await res.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      <Todo todoss={todos} />
    </div>
  );
}

function Todo({ todoss }) {

  return (
    <div>
      {todoss.map((todo) => (
       
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          console.log(todo)
          <h4>{todo.description}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
