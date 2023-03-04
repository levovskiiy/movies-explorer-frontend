import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Layout from '../Layout/Layout'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Movies from '../Movies/Movies'
import NotFoundPage from '../../views/NotFoundPage/NotFoundPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='movies' element={<Movies />} />
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </ >
  )
}

export default App
