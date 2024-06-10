import { useState } from "react";
// import React from "react";
function Object()
{
     const [obj,setobj]=useState({color:"Red",brand:"Honda",model:"6G",year:"2020"});
     function updateclr()
     {
        setobj((previouse)=>{
return{...previouse,color:"grey"}

        })
     }
     console.log("create state",obj)
    return (
        <div>
        <h1>Object in STATE</h1>
         <p>Color: {obj.color}</p>
            <p>Brand: {obj.brand}</p>
            <p>Model : {obj.model}</p>
            <p>Year: {obj.year}</p>
            <button onClick={updateclr}>Changecolor</button>
        </div>
    )
}

export default Object;