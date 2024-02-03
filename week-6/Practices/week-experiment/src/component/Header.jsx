import React, { Fragment } from "react"


 export const Header =  React.memo(function Headerss(props){

    return( <div>
          <button onClick={()=>
  {
    
props.setName(Math.random())
  
  }} >Click to random name</button>
       
        My name is {props.name}
    </div>)

})

