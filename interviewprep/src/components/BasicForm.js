import React,{useState} from 'react'


export default function BasicForm() {

    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[newEntry,setNewEntry]=useState([]);

    const submitForm=(e)=>{
        e.preventDefault();
        if(email && password)
        {
        const allEntry={email:email,password:password};
        setNewEntry([...newEntry,allEntry]);
        setEmail("");
        setPassword("");
        }
        else{
            alert("pls fill data");
        }
    }

  return (
    <div>
        <form action="" onSubmit={submitForm}>
            <div>
                <label>Email</label>
                <input type="text" name="email" id="email" placeholder="enter email" 
                autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" id="password" placeholder="enter password" 
                autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Login form</button>
            </div>
        </form>
        <div>{
            newEntry.map((currEle)=>{
                const {id,email,password}=currEle;

           return( 
           <div>
           <table border="1" >
           <tbody>
                <tr>
                    <td key={id}>{currEle.email}</td>
                    <td>{currEle.password}</td>
                </tr>
                </tbody>
            </table>
            </div>
            )
            })}
            </div>

      
    </div>
  )
}
