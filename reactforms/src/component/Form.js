import './App.css';
import {useForm} from "react-hook-form";
import {useState} from "react";

function App() {
  const { register,handleSubmit,formState: { errors },watch } = useForm();  
   const [useInfo,setUserInfo]=useState();
  const onSubmit=(data)=>{
    setUserInfo(data);
    console.log(data);
    
  }
  console.log(watch());
  console.log(errors);
  return (
    <div className="App">
      <pre>{JSON.stringify(useInfo,undefined,3)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>

    <h1>Registration Form</h1>
    <p>{errors.username?.message}</p>
    <label>UserName:</label>
    <input type="text" name="username" placeholder="Username"   {...register("userName",{required:"username is required"})} />
    <br/>
    <p>{errors.email?.message}</p>

    <label>Email:</label>
    <input type="email" name="email" placeholder="email"  {...register("email",{required:"email is required"})}  />
    <br/>
    <p>{errors.password?.message}</p>

    <label>Password:</label>
    <input type="password" name="password" placeholder="password"  {...register("password",{required:"password is required",minLength:{value:4,messgae:"password must be more than 4 characters"}})}/>
    <br/>
    <button>Submit</button>
    </form>
    </div>
  );
}

export default App;
