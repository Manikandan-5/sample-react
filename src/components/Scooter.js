import { useState } from "react";


function Scooter()
{

    const [color,setclr]=useState("Red")
    const [brand,setbra]=useState("Honda")
    const [model,setmod]=useState("6G")
    const [year,setyear]=useState("2020")
    return (
        <div>
        <h1>WELCOME</h1>
         <p>Color: {color}</p>
            <p>Brand: {brand}</p>
            <p>Model : {model}</p>
            <p>Year: {year}</p>
        </div>
    )
}

export default Scooter;


