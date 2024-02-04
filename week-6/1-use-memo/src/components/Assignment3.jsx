import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent



// export const Assignment3 = () => {
//     const [items, setItems] = useState([
//         { name: 'Chocolates', value: 10 },
//         { name: 'Chips', value: 20 },
//         { name: 'Onion', value: 30 },
//         { name: 'Tomato', value: 30 },
//         // Add more items as needed
//     ]);

//     const totalValue = useMemo(() => {
//         console.log('Calculating total value');
//         return items.reduce((sum, item) => sum + item.value, 0);
//     }, [items]);

//     return (
//         <div>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item.name} - Price: ${item.value}</li>
//                 ))}
//             </ul>
//             <p>Total Value: {totalValue}</p>
//         </div>
//     );
// };


export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo((    )=>{
        let totalValue = 0;
        for(let i = 0 ; i < items.length; i++){
            console.log(items[i].value)
            totalValue += items[i].value

        }
        return totalValue;
    },[items]
    )
    
    // Your code ends here
    return (
        <div>
            <button onClick={() =>{
                setItems([...items,{name: 'Chocolates', value: Math.random()}])
            }}>add grocery</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
