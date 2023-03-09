import React, { useEffect } from 'react'
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
import UserService from 'utils/UserService'
import { type IUser } from 'types/types'

import './App.css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockUser: IUser = {
  name: 'John Doe',
  email: 'kenaa@example.com',
  password: '123456'
}

function App() {
  useEffect(() => {
    UserService.login({ email: 'kenaa@example.com', password: '123456' })
      .then(res => { console.log(res) })
  }, [])

  return (
    <>
      <UserContext.Provider value={null}>
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
