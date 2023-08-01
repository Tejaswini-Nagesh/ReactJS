import React from 'react'
import {Outlet,useSearchParams} from 'react-router-dom'

const Users = () => {
const[searchParams,setSearchParams]=useSearchParams()

const showActivatUsers=searchParams.get('filter')==='active'
  return (
    <div>
        <h2>User 1</h2>
        <h2>User 1</h2>
        <h2>User 1</h2>
        <Outlet />
    <div>
      <button onClick={()=>setSearchParams({filter:'active'})}>Active User</button>
      <button onClick={()=>setSearchParams({})}>Reset Filter</button>
      </div>
      {showActivatUsers?(
        <h2>Show active user</h2>
      ):(
        <h2>Showing all users</h2>
      )
      }
    </div>
  )
}

export default Users
