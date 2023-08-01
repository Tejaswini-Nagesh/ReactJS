import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <input type='search' placeholder="Search Products"></input>
      <nav>
          <Link to='featured'>Featured</Link>
          <Link to='NewProducts'>New</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Product
