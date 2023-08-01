import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {userAction} from './components/redux/actions/userAction';
import User from './components/User';

function App() {
const dispatch=useDispatch()
const userList=useSelector(state=>state.userList)
const {loading,users,error}=userList

useEffect(()=>{
  dispatch(userAction())

},[dispatch])

  return (
    <div className="App">
    <h1>Redux Thunk Tutorial</h1>
  {loading?
  (<h2>Loading....</h2>):error?(<h2>{error}</h2>):(<User users={users}/>
  )}
    </div>
  );
}

export default App;
