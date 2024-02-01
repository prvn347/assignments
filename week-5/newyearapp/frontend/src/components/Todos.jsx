

import { UpdateTodo } from "./UpdateTodo";

export function Todos({todos}) {
    return <div>
        {todos.map(function (todo) {
            return <div>
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
                <button onClick={()=>{
                     fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body:JSON.stringify({
                            id: todo._id
                        }),
                        headers:{
                            "Content-type" : "application/json"
                        }
        
                    })
          .then(async function(res){
            const json = await res.json();
       
            //   alert("todo is added")
            
          })
                }} >{todo.completed == true ? "Completed" : "Mark as complete"} </button>
                <button 
                onClick={()=>{
                    fetch("http://localhost:3000/todos",{
                       method: "DELETE",
                       body:JSON.stringify({
                           id: todo._id
                       }),
                       headers:{
                           "Content-type" : "application/json"
                       }
       
                   })
         .then(async function(res){
           const json = await res.json();
           todos = [...todos,json]
           //   alert("todo is added")
           
         })
               }}
                >Delete</button>
                <button onClick={() =>{
                <UpdateTodo todos ={todo}></UpdateTodo>
                }

                }>Edit</button>

            </div>
        })}


    </div>

}