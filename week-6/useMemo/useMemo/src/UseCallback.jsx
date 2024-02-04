import { useCallback,useState } from "react";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App(){
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
      setCounter(counter + 1);
    };
  
    const onClick= useCallback(() => { //using useCallback() for the handler function
       console.log("handler");
    }, [counter]); 
  
    console.log("Parent render");
    return (
      <div className="App"><button onClick={handleClick}>Increase</button>
         <h2>{counter}</h2>
         <Child name={"joe"} childHandler={onClick} />
    </div>
    );
}



const Child= ({value, child}) => {
    console.log('Render: ', child)
  
    return (
      <div>
        {child}: {value}
      </div>
    )
  }
  


export default App;