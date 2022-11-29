import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <Link to={'/top_rated'} > Top rated</Link></li>
            <li> <Link to={'/best_seller'} > Best seller</Link></li>
            <li> <Link to={'/sales'} > Sales</Link></li>
            <li> <Link to={'/customer_service'} > Customer service</Link></li>
        </ul>
    </div>
  )
}

export default Navbar