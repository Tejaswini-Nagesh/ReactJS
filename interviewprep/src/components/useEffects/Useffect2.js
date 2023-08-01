//resize window or cleanup function
import React,{useState,useEffect} from 'react'

export default function Useffect2() {
    const[widthCount,setWidthCount]= useState(window.screen.width);

        const actualWidth=()=>{
            setWidthCount(window.innerWidth);
        }

    useEffect(()=>{
        console.log("add event");
        window.addEventListener("resize",actualWidth);
        return ()=>{
            console.log("remove event");
            window.removeEventListener("resize",actualWidth);
        }

    });
   


  return (
    <div>
      <h1>The actual size of window</h1>
      <h2>{widthCount}</h2>
    </div>
  )
}
