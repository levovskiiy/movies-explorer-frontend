import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import NotFoundPage from '../../views/NotFoundPage/NotFoundPage'

import ProfilePage from '../../views/ProfilePage/ProfilePage'
import LandingPage from '../../views/LandingPage/LandingPage'
import MoviesPage from '../../views/MoviesPage/MoviesPage'
import SavedMoviesPage from '../../views/SavedMoviesPage/SavedMoviesPage'
import LoginPage from '../../views/LoginPage/LoginPage'
import RegisterPage from '../../views/RegisterPage/RegisterPage'

import UserProvider from 'context/user/UserProvider'
import './App.css'

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='saved-movies' element={<SavedMoviesPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='/signin' element={<LoginPage />}></Route>
            <Route path='/signup' element={<RegisterPage />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </UserProvider>
    </ >
  )
}

export default App
