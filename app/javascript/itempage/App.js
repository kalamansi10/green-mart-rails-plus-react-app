import React from 'react'
import Navigation from '../general/Navigation'

export default function App({isSignedIn}) {


  return (
    <>
      <Navigation isSignedIn={isSignedIn} />
    </>
  )
}
