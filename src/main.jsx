import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container px-5 py-12 mx-auto md:py-24">
      <App />
    </div>
  </React.StrictMode>,
)
