import { useState } from "react";
import { useEffect } from "react";

function App(){
const[count,setCount] = useState(0)

const[sum,setSum] = useState(0)

    

  return <div>
  

  <input type="text" onChange={function(e){
    const value = e.target.value;
    const intValue = parseFloat(value)
   for(let i = 1; i <= intValue;i++){
    i = (i * (i + 1)) / 2;
    setSum(i);
   }

  }} />
  <br />
  <button onClick={() =>{
   
setCount(count +1)

  }}> count {count}</button>

  <br />
<h2>the sum from 1-n is : {sum}</h2>
  </div>
}



export default App;