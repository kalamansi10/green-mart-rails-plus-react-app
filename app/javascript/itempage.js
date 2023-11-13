import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './itempage/App'

const rootDom = document.getElementById('root')
const isSignedIn = rootDom.getAttribute('signedin')
const itemID = rootDom.getAttribute('item-id')

ReactDOM.createRoot(rootDom).render(
  <React.StrictMode>
    <App isSignedIn={isSignedIn} itemID={itemID}/>
  </React.StrictMode>,
)