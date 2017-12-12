import React from 'react'
import { Link } from 'react-router-dom'

function PrimaryNav({

}) {
  return (
    <nav className='primary'>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/products'>
            Products
          </Link>
        </li>
        <li>
          <Link to='/wishlist'>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to='/account'>
            Account
          </Link>
        </li>
        <li>
          <Link to='/signin'>
            Sign In
          </Link>
        </li>
        <li>
          <Link to='/signup'>
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default PrimaryNav