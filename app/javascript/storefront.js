import React, {createContext, useContext} from "react"
import ReactDOM from "react-dom/client"
import App from "./storefront/App.js"

const rootDom = document.getElementById('root')

export const isSignedIn = rootDom.getAttribute('signedin')

ReactDOM.createRoot(rootDom).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)