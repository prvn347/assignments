import React, { Fragment } from "react"


 export function Heaer(props){

    return( <div>
          <button onClick={()=>
  {
    
props.setName(Math.random())
  
  }} >Click to random name</button>
       
        My name is {props.name}
    </div>)

}

