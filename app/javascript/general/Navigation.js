import React, {useContext} from 'react'
import SignIn from './SignIn'

export default function Navigation({isSignedIn}) {
  return (
    <nav className='navigation flex-row justify-around'>
      <h1>Seed Mart</h1>
      <ul className="flex-row">
        <SignIn isSignedIn={isSignedIn}/>
        <li>Cart</li>
      </ul>
    </nav>
  )
}
