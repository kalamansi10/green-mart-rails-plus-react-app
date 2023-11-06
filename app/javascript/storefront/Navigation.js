import React, {useContext} from 'react'
import SignIn from './SignIn'

export default function Navigation() {
  return (
    <nav className='navigation flex-row justify-around'>
      <h1>Seed Mart</h1>
      <ul className="flex-row">
        <SignIn />
        <li>Cart</li>
      </ul>
    </nav>
  )
}
