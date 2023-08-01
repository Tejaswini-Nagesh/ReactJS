import React,{useState} from 'react'
import { unstable_getCurrentPriorityLevel } from 'scheduler';

export default function UseStateArray() {

    const bioData=[{
        id:0,myName:"Vinod",age:26
    },
    {
        id:1,myName:"thapa",age:27
    }

    ]
    console.log(bioData);
    const[myArray,setmyArray]=useState(bioData);

    const clearArray=()=>{
        setmyArray([]);
    };

    const removeEle=(id)=>{
        const myNewArray=myArray.filter((currEle)=>{
            return currEle.id!=id;
        })
        setmyArray(myNewArray);
    }


  return (
    <div>
      {
      myArray.map((currEle)=>{

          return (
              <table border="1">
              <tbody>
              <tr>
          <td key={currEle.id}>Name:{currEle.myName} 
          </td>
          <td>
            Age:{currEle.age} 
           </td>
           <td>
           <button onClick={()=>removeEle(currEle.id)}>Remove</button>
           </td>
           </tr>
           </tbody>
           </table>
            );
      })

    }
    <button onClick={clearArray}>Clear</button>
    </div>
  )
}
