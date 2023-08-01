import React,{useState}from 'react'

export default function CircuitEval() {
    const[demo,setDemo]=useState("check");
    //if in or opertor data true it will print left side 
    //and in and operator it will print right side
  return (
    <div>
        <h1>{ demo||"technical"}</h1>
        <h1>{demo && "Vinod"}</h1>
        
      
    </div>
  )
}
