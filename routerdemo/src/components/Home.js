import {useNavigate} from 'react-router-dom'

export const Home=()=>{
    const navigate=useNavigate()
    return (
        <div>
            Home page
            <br />
        <button onClick={()=>navigate('OrderSummary')}>Place Order</button>
        </div>
    )
}