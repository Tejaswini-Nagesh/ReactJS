import React,{useState,useEffect} from 'react'

export default function UseEffects() {

  const[count,setCount]=useState(0);
  useEffect(()=>{
    document.title=`Chats(${count})`
  });
  console.log("hello outsides");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
      
    </div>
  )
}
