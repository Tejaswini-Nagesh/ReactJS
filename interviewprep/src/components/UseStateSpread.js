import React,{useState} from 'react'

const UseStateSpread = () => {


    const[myObject,setMyObject]=useState({
        myName:"teju",age:20,address:"tuljapur",
    });
    const handleChange=()=>{
        setMyObject({...myObject,age:87});

    }

return (
    <div>
        
    <h2>Name:{myObject.myName} & {myObject.age}</h2>
    <button onClick={handleChange}>Update</button>
        
      
    </div>
  )
}

export default UseStateSpread
