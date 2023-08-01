import {useState} from 'react';

import React from 'react'

function Button() {

    const[name,setName]=useState(" ");
    const[displayName,setDisplayName]=useState(" ");

    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleDisplay=()=>{
        setDisplayName(name);
    }

  return (
    <div>
        <input placeholder="enter name" onChange={handleChange} />
        <button onClick={handleDisplay} style={{ width: "60px" }}>Display name</button>
        <h2>hello  {displayName}</h2>
      
    </div>
  );
}
export default Button;
