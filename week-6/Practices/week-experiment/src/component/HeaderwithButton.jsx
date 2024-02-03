import { useState } from "react"

export function HeaderwithButton(){
    const [name, setName] = useState("Pravin")

    return <div>
     
         <button onClick={()=>
  {
    
setName(Math.random())
  
  }} >Click to random name</button>

  <header>my name is {name}</header>
    </div>
}