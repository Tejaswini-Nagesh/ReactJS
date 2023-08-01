import './App.css';
import React, { Component, useState,useEffect } from 'react';
//import { Hello } from './Component/hello';
//import { Clock } from './Component/clock';
//import {HouseList} from './Component/houseList';
function App() {

  //let str='tejaswini';
  //<Clock></Clock>
//<HouseList/>

const[count,setCount]=useState(1);
const handleAdd=()=>{
  setCount(count+1);
}
const handleSub=()=>{
  setCount(count-1);
}
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

useEffect(() => {
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });
  console.log("ran");

  return () => {
    console.log("ran returned");
  };
}, [count]);
  return (
    <div>
    <button onClick={handleAdd}>ADD</button>
    <label>{count}</label>
    <button onClick={handleSub}>SUB</button>
    
    </div>
  );
}




export default App;
