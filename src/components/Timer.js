import { useEffect, useState } from "react";

function Timer()
{
    const [count,setcount]=useState(0)

     useEffect(()=>
     {
        console.log("Screen refersh!!")
       // checkcount()
        
     },[count])

     function Update()
     {
        setcount((previ)=>{return previ+1})
    }
     
    return(
        <>
        <h1>
        I Have Rendered {count} Times
        </h1>
        <button onClick={Update}>inncrese count</button>
        </>
    )
}
export default Timer;