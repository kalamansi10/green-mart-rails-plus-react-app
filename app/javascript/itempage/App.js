import React from 'react'
import Navigation from '../general/Navigation'

export default function App({isSignedIn, itemID}) {

  return (
    <>
      <Navigation isSignedIn={isSignedIn} />
      <PreviewSlider />
    </>
  )
}
