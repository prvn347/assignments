import { useState,useCallback,useMemo } from "react";

// Create a counter component with increment and
//  decrement functions. Pass these functions to a
//   child component which has buttons to perform the increment 
//   and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const increamentCount = useMemo( function handleIncrement() { 
        


        setCount((prevCount) => prevCount + 1);


        // setCount(count + 1)
        //you should always create a functional cuz useCallback returns the function .
        // and it is not necessary to pass a dependency here as it return the functional value so from the props we are calling the function instead 

        //wanting the data




    },[]) 

   const decrementCount = useCallback(function handleDecrement() {
  
    
    setCount((prevCount) => prevCount - 1);
},[]) 
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={increamentCount} onDecrement={decrementCount} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
