import './App.css'
import { useState } from 'react';


function App(){
  const [count,setCount] = useState(0)


  return <div>

    <button onClick={()=>{

      setCount(count +1)
    }
    }>count:{count}</button>
  </div>


}
export default App;





























// import { Assignment1 } from './components/Assignment1'
// import { Assignment2 } from './components/Assignment2'
// import { Assignment3 } from './components/Assignment3'

// function App() {
//   return (
//     <>
//       {/* <Assignment1 /> */}

//       {/* <Assignment2 /> */}
//       <Assignment3 />
//     </>
//   )
// }

// export default App
