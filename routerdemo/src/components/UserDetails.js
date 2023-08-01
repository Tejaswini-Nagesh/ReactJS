import React from 'react';
import {useParams} from 'react-router-dom'
const UserDetails = () => {
// const params= useParams()
 //const userId=params.userId
 //destructing way
  const {userId}=useParams() 
  return (
    <div>
      Details about users{userId}
    </div>
  )
}

export default UserDetails
