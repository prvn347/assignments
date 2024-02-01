import { useState } from "react";

export function UpdateTodo(props){

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    return <div>
        <input style={{
            padding: 15,
            margin: 10,
            background: "#1a1a1a",
            borderRadius:8,
            border: 1 
        }} type="text" placeholder="Title" onChange={function(e){
            const value1 = e.target.value;
           setTitle(e.target.value);
        }} /><br />
        <input  style={{
            padding: 15,
            margin: 10,
            background: "#1a1a1a",
            borderRadius:8,
            border: 1 
        }} type="text" placeholder="Description" onChange={function(e){
            const value2 = e.target.value;
           setDescription(e.target.value);
        }} /><br />
        <button onClick={() =>
            fetch("http://localhost:3000/update",{
                method: "PUT",
                body:JSON.stringify({
                    id : props._id,
                    title: title,
                    description: description
                    

                }),
                headers:{
                    "Content-type" : "application/json"
                }

            })
  .then(async function(res){
    const json = await res.json();
props.todos = [...props.todos,json]
    //   alert("todo is added")
    
  })
        }>Update a Todo</button>
    </div>
}

