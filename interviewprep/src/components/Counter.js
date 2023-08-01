import React ,{useState} from 'react'



export default function Counter() {
    const[count,setCount]=useState(0);
    const handleChange = (e) => {
        setCount(parseInt(e.target.value)); // Parse the input value to an integer
      };
    const handleIncrement=()=>{
        if(count<50)
        {
            setCount(count+1);
        }
    }
    const handleDecrement=()=>{
        if(count>1){
            setCount(count-1);
        }
    }

  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <input type="number" placeholder="enter value" value={count} onChange={handleChange} />
        <button onClick={handleDecrement}>Decrement</button>
      
    </div>
  )
}
