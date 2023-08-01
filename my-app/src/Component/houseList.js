import React from 'react';
import HouseRow from './houseRow';
const houses=[   
     {    id:1,    address:"12 Valley of Kings, Geneva",    country:"Switzerland",    price:900000    },
     {    id:2,    address:"13 Valley of Kings, Geneva",    country:"canada",    price:100000    }
    
    ]
export const HouseList=()=>{
    return (
        <div>
        <div className='row-mb-2'>
        <h1> house for sale in the market</h1>

        </div>
        <table className='table table-hover'>
        <thead>
                <td>Address</td>
                <td>country</td>
                <td>price quoted</td>

        </thead>
        <tbody>
                {houses.map((h)=><HouseRow key={h.id} house={h}/>)}

        </tbody>
        </table>
        </div>
    )
}