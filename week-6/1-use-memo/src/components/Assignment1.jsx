import { useEffect } from "react";
import { useState,useMemo } from "react";


// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [count,setCount] = useState(0)
    const [id,setId] = useState(0);
   // Your solution starts here
    const factorialCalc = useMemo(( )=>{
         let facValue = 1;
for(let i = 1;i <= input; i++ ){
    console.log("under the expensive loop")
    facValue = facValue * i;
  
}  return facValue;


    },[input])



useEffect(( ) =>{
    setCount(count +1)

},[id])
    // Your solution ends here


    return (
        <div>
            <button onClick={()=>{
                setId(id +1)
            }}>count {count}</button>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {factorialCalc}</p>
        </div>
    );
}