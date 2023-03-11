import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate, Outlet } from 'react-router-dom'
import Layout from '../Layout/Layout'
import NotFoundPage from '../../views/NotFoundPage/NotFoundPage'

import ProfilePage from '../../views/ProfilePage/ProfilePage'
import LandingPage from '../../views/LandingPage/LandingPage'
import MoviesPage from '../../views/MoviesPage/MoviesPage'
import SavedMoviesPage from '../../views/SavedMoviesPage/SavedMoviesPage'
import LoginPage from '../../views/LoginPage/LoginPage'
import RegisterPage from '../../views/RegisterPage/RegisterPage'

import useUser from 'hooks/useUser'
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute'
import { UserActions } from 'context/user/actions'
import UserService from 'utils/UserService'
import './App.css'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { Wrapper, Content } from 'components/UI'
import MoviesProvider from '../../context/movies/provider'

function App() {
  const { state, dispatch } = useUser()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    UserService
      .checkToken()
      .then((user) => {
        dispatch({ type: UserActions.SIGNIN, payload: { ...user, isLoggedIn: true } })
        navigate('/movies')
      })
  }, [])

  return (
      <MoviesProvider>
        <Wrapper>
          <Routes>
            {['/', 'movies', 'saved-movies', 'profile'].map(path => (
              <Route key={path} path={path} element={<Header />} />
            ))}
          </Routes>
          <Content>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/signin' element={<LoginPage />}></Route>
              <Route path='/signup' element={<RegisterPage />}></Route>
              <Route path='/movies' element={<ProtectedRoute redirect='/' element={<MoviesPage />} />} />
              <Route path='/saved-movies' element={<ProtectedRoute redirect='/' element={<SavedMoviesPage />} />} />
              <Route path='/profile' element={<ProtectedRoute redirect='/' element={<ProfilePage />} />} />
              <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
          </Content>
          <Routes>
            {['/', 'movies', 'saved-movies'].map(path => (
              <Route key={path} path={path} element={<Footer />} />
            ))}
          </Routes>
        </Wrapper>
      </MoviesProvider>
  )
}

export default App
