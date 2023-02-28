import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Wrapper from '../UI/Wrapper/Wrapper'
import Layout from '../Layout/Layout'
import Register from '../Register/Register'
import Login from '../Login/Login'

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </Wrapper>
    </ >
  )
}

export default App
