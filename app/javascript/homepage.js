import React from "react"
import ReactDOM from "react-dom/client"
import Navigation from './general/Navigation'
import DisplayItems from './general/DisplayItems'
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
      <DisplayItems API="/v1/seeds/most-recent"/>
    </div>
  </React.StrictMode>,
)