import React from "react"
import Navigation from '../general/Navigation'
import DisplayItems from '../general/DisplayItems'
import Search from './Search'
import Banners from './Banners'

export default function App({isSignedIn}) {

  return (
    <>
    <Navigation isSignedIn={isSignedIn}/>
      <div className="flex-column align-center">
        <Search />
        <Banners />
        <DisplayItems API="/v1/seeds/most-recent"/>
      </div>
    </>
  )
}
