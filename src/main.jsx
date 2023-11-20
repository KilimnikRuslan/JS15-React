import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import List from './List.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <List/>
  </React.StrictMode>,
)
