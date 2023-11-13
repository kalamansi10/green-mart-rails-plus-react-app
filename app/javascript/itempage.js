import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './itempage/App'

const rootDom = document.getElementById('root')
const isSignedIn = rootDom.getAttribute('signedin')

ReactDOM.createRoot(rootDom).render(
  <React.StrictMode>
    <App isSignedIn={isSignedIn}/>
  </React.StrictMode>,
)