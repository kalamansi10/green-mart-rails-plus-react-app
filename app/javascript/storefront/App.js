import React from 'react'
import Navigation from './Navigation'
import Search from './Search'
import Promos from './Promos'
import RecentItems from './RecentItems'

function App() {
  return (
    <>
      <Navigation />
      <div className="flex-column align-center">
        <Search />
        <Promos />
        <RecentItems />
      </div>
    </>
  )
}

export default App
