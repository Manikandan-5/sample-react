import React from "react";

class Car extends React.Component {
    constructor ()
    {
        super();
        this.state = {color:"Red",model:"Ford"}
    }
  render() {
    return( 
    <div>
        <h1>My Fav CAR----Clr  {this.state.color}and Model is {this.state.model}</h1>
    <button onClick={()=>{this.setState((previouse)=>{return {...previouse,color:"Blue"}})}}>Change Clr</button>
    </div>)
  }
}
export default Car;







