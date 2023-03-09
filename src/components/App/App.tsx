import React, { useEffect, useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import NotFoundPage from '../../views/NotFoundPage/NotFoundPage'

import ProfilePage from '../../views/ProfilePage/ProfilePage'
import LandingPage from '../../views/LandingPage/LandingPage'
import MoviesPage from '../../views/MoviesPage/MoviesPage'
import SavedMoviesPage from '../../views/SavedMoviesPage/SavedMoviesPage'
import LoginPage from '../../views/LoginPage/LoginPage'
import RegisterPage from '../../views/RegisterPage/RegisterPage'

import UserContext from 'context/user.context'

import './App.css'
import userReducer, { UserActions } from 'components/reducers/user/user.reducer'
import { type User } from 'types/types'
import UserService from 'utils/UserService'

const initialUser: Partial<User> = {
  name: '',
  email: '',
  password: '',
  isAunthorized: false
}

function App() {
  const [state, dispatch] = useReducer(userReducer, initialUser)

  useEffect(() => {
    UserService
      .checkToken()
      .then((user) => {
        dispatch({ type: UserActions.AUTHORIZE, payload: { ...user, isAunthorized: true } })
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='saved-movies' element={<SavedMoviesPage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Route>
          <Route path='/signin' element={<LoginPage />}></Route>
          <Route path='/signup' element={<RegisterPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </UserContext.Provider>
    </ >
  )
}

export default App
