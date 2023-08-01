import React from 'react'
import {useNavigate} from 'react-router-dom'

const OrderSummary = () => {
    const navigate=useNavigate()
  return (
      <>
    <div>
      order Confirmed
    </div>
    <button onClick={()=>navigate(-1)}>GO back</button>
    </>
  )
}

export default OrderSummary
