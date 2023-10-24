// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.js"
import "normalize.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)