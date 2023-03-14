import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './vendor/normalize.css'
import './vendor/fonts/fonts.css'
import './index.css'
import App from './components/App/App'
import UserProvider from 'context/user/UserProvider'
import { MoviesProvider } from 'context/saved-movies'
import SavedMoviesProvider from 'context/saved-movies/provider'

const root = ReactDOM.createRoot(
  document.querySelector('.root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MoviesProvider>
          <SavedMoviesProvider>
            <App />
          </SavedMoviesProvider>
        </MoviesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
