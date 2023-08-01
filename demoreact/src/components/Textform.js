import React, { useState } from 'react'
import  './Video.css';

function Textform(props){
    //setText("new text");
    const handleClick=()=>{
        console.log("uppercase is clicked" ,+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleClearText=(event)=>{
        let newText='';
        setText(newText);
    } 
    const [text,setText]=useState('enter text here2');
    return (
        <>
              <form>  
        <div>   
            <h1>Enter text here</h1>
            <textarea id="myBox" row="10" value={text} onChange={handleOnChange}></textarea><br/>
            <button type="uppercase" onClick={handleClick}>Convert to UpperCase</button>   
            <button type="uppercase" onClick={handleClearText}>Clear</button>   

        </div>   
        
    </form> 
    <div>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and{text.length} character</p>
        <br/>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>    

    )

}
export default Textform;
