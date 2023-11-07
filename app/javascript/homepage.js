import React from "react"
import ReactDOM from "react-dom/client"
import Navigation from './general/Navigation'
import SeedsDisplay from './general/SeedsDisplay'
import Search from './homepage/Search'
import Banners from './homepage/Banners'

const rootDom = document.getElementById('root')

const isSignedIn = rootDom.getAttribute('signedin')

ReactDOM.createRoot(rootDom).render(
  <React.StrictMode>
    <Navigation isSignedIn={isSignedIn}/>
    <div className="flex-column align-center">
      <Search />
      <Banners />
      <SeedsDisplay SeedApi="/v1/seeds/most-recent"/>
    </div>
  </React.StrictMode>,
)