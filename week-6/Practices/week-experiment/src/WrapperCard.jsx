import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

 return (<div>
  
<CardWrapper>
     Hi there
     </CardWrapper>
  
   </div>
  )
}

function TextComponent(){

    return <div>
        <h1>Hi,there I am pravin.</h1>
    </div>
    
}
function CardWrapper({children}){
    return ( <div style={{
        border: "3px solid white"
    }}>
{children}

    </div>

        
    )

}

// export default App
