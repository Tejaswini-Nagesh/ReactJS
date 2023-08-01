import React,{useState,useMemo} from 'react'

export default function Usememo() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);

    const multiCountMemo=useMemo(function mutiCount(){
        console.warn("muticount");
        return count*5;
    },[count])

  return (
    <div>
      <h1>usememo hook in react</h1>
        <div>count={count}<br/>
        item={item}
        </div>
    <h2>{multiCountMemo} </h2>
      
        <button onClick={()=>setCount(count+1)}>update count</button>
        <br/>
        <button onClick={()=>setItem(item*5)}>update item</button>
    </div>
  )
}
