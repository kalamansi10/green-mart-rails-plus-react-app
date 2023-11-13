import React, {useEffect, useState} from 'react'
import Navigation from '../general/Navigation'
import PreviewSlider from './PreviewSlider'

export default function App({isSignedIn, itemID}) {

  const [item, setItem] = useState()

  useEffect(() => {
    fetch('/v1/seeds/get-item/' + itemID)
    .then(response => response.json())
    .then(data => setItem(data))
  },[])

  if (item != null) {
    return (
        <>
          <Navigation isSignedIn={isSignedIn} />
          <PreviewSlider item={item}/>
        </>
      )
    }
}
