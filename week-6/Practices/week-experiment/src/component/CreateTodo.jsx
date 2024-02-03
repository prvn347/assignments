import { useState } from "react";
import { Todo } from "./Todo";

export function CreateTodo(props){
    
  let counter = 3

    // const [title,setTitle] = useState("")
    // const [description,setDescription] = useState("")
    // return <div>
    //     <input style={{
    //         padding: 15,
    //         margin: 10,
    //         background: "#1a1a1a",
    //         borderRadius:8,
    //         border: 1 
    //     }} type="text" placeholder="Title" onChange={function(e){
    //         const value1 = e.target.value;
    //         return value1;

    //     }} /><br />
    //     <input  style={{
    //         padding: 15,
    //         margin: 10,
    //         background: "#1a1a1a",
    //         borderRadius:8,
    //         border: 1 
    //     }} type="text" placeholder="Description" onChange={function(e){
    //         const value2 = e.target.value;
    //         return value2;
           
    //     }} /><br />
    return <div>
        <button onClick={() =>{

            props.setTodo([...props.todos,{
id :counter++,
                title: Math.random(),
                description: Math.random()
            }])

        }
            
        }>Add a Todo</button>
    </div>
}

