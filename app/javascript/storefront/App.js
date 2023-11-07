import React from 'react'
import Navigation from './Navigation'
import Search from './Search'
import Promos from './Banners'
import RecentItems from './RecentItems'
import Banners from './Banners'

function App() {
  return (
    <>
      <Navigation />
      <div className="flex-column align-center">
        <Search />
        <Banners />
        <RecentItems />
      </div>
    </>
  )
}

export default App
