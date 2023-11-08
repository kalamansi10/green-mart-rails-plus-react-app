import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './general/Navigation'
import DisplayItems from './general/DisplayItems'
import SearchFilter from './resultspage/SearchFilter'

const rootDom = document.getElementById('root')

const isSignedIn = rootDom.getAttribute('signedin')
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const keyword = urlParams.get('keyword')
const searchAPI = '/v1/seeds/search/' + queryString

ReactDOM.createRoot(rootDom).render(
  <React.StrictMode>
    <Navigation isSignedIn={isSignedIn} />
    <div className='flex-column align-center'>
      <SearchFilter keyword={keyword} />
      <DisplayItems API={searchAPI} />
    </div>
  </React.StrictMode>,
)