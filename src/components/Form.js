import { useState } from "react";

function Form()
{
    // const [name,setname]=useState("")
    // const[age,setage]=useState("")
    // const[email,setemail]=useState("")
    const [input,setinput]=useState({phone:"+91",email:"@gmail.com",country:"india",about:"I am Student"})
function Submit(e)
{
    e.preventDefault();
    console.log("Form Submitted")
    //console.log("state name",name,"age",age,"email",email)
    console.log("input",input)
}
function handlechange(e)
{
   const name= e.target.name
   const value= e.target.value
   
setinput((previ)=>{ return {...previ,[name]:value}})
}

    return(
        <form onSubmit={Submit}>
        <h1>
            <label >Enter Your Name <input type="text"  name="name" onChange={handlechange}/> </label><br />
            <label >Enter Your Age  <input type="number"  name="age" onChange={handlechange}/> </label><br />
            <label >Enter Your Email <input type="Email" name="email"  onChange={handlechange} value={input.email}/> </label><br />
            <label >Enter Your PhoneNum <input type="text" name="phone"  onChange={handlechange} value={input.phone}/> </label><br />
            <label >Enter Your Country 
                <select  name="country"  onChange={handlechange} value={input.country}>
                    <option value="">select</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                    
                    </select> </label><br />
            <label htmlFor="">Enter for YOU <textarea name="about" value={input.about} onChange={handlechange} /></label>

            <input type="submit" value="Submit"/>
        </h1>
        </form>
    )
}
export default Form;