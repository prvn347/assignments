import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [id,setId] = useState(1)
 

  return <div>
 
    <button onClick={() =>{

      setId(id)
    }}
    >1</button>
    <button onClick={(cng) =>{
cng = 1

     
      setId(cng + 1)
    }}>2</button>
    <button onClick={(cng) =>{
      cng = 1
      setId(cng + 3)
    }}>4</button>
    <button onClick={(cng) =>{
      cng = 1
      setId(cng + 4)
    }}>5</button>
    <button onClick={(cng) =>{
      cng = 1
      setId(cng +2)
    }}>3</button>
    <Todo id={id} setId = {setId} />
  </div>
}

function Todo(props) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + props.id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
     

  }, [props.id])



  return <div>


    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;