//import logo from './logo.svg';
import React ,{useState} from 'react'
import Usememo from './components/Usememo';
import Useref from './components/Useref';
import './App.css';
//import ClassCounter from './components/ClassCounter';
//import HookCounterTwo from './components/HookCounterTwo';
//import HookCounterThree from './components/HookCounterThree';
//import Test from './components/Test';
import Greeting from './components/Greeting';
import Message from './components/Message';

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const[text,setText]=useState('Login');

  return (
    <div>
      {isLoggedIn?<Message name="shreyas"/>:<Greeting />}
      <h1>welcome to login page</h1>
      <button onClick={()=>{setIsLoggedIn(true);setText('loged In')}}>{text}</button>
      <Usememo />
      <Useref />
    </div>
  );
}

export default App;
