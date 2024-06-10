import { useState } from "react";
function Favcolor()
{
   // let clr='Blue';
   const [clr,setclr]= useState('Green')
    return(
        <>
        <h1>My FAV Colour {clr} </h1>
        <button onClick={()=>{setclr('Red')}}>Change Color</button>
        </>
    )
}
export default Favcolor;