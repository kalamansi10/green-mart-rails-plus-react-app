import React, {useContext} from 'react'
import SignIn from './SignIn'

export default function Navigation() {
  return (
    <nav className='Navigation'>
      <h1>Seed Mart</h1>
      <ul>
        <SignIn />
        <li>Cart</li>
      </ul>
    </nav>
  )
}
