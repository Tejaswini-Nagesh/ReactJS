import React,{useRef} from 'react'

const Useref = () => {
    const inputRef=useRef(null)
    function handleInput(){
        console.warn("function call")
        inputRef.current.value=100;
        inputRef.current.focus();
        inputRef.current.style.display="red";
    }
  return (
    <div>
        <h1>useref hook</h1>
        <input  type="text" ref={inputRef}  />
        <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default Useref
