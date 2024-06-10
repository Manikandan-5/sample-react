import { useState } from "react";
function List() {

    const [list,setlist]=useState([])
    const [count,setcount]=useState(1)
function additem()
{
const itemname='item'+count;
setlist((previ)=>{return [...previ,itemname]})
setcount((previ)=>{return previ+1})
}console.log('currenrt state',list)

  return (
    <>
      <h1>LIST CREATE</h1>

    <button onClick={additem}>ADD ITEM</button>
      <ul>{
        list.map((el,index)=> <li key={index}>{el}</li>)}
        
      </ul>
    </>
  );
}
export default List;
