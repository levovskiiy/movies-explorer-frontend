import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './vendor/normalize.css'
import './vendor/fonts/fonts.css'
import './index.css'
import App from './components/App/App'

const root = ReactDOM.createRoot(
  document.querySelector('.root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
