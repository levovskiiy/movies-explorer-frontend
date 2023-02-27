import React, { useState } from 'react'
import Header from '../Header/Header'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Login from '../../views/Login/Login'
import Content from '../UI/Content/Content'
import Wrapper from '../UI/Wrapper/Wrapper'
// import { type Theme } from '../../types/types'

function App() {
  const [isLoggin] = useState(false)

  return (
    <>
      <Wrapper>
        <Header isLoggin={isLoggin} />
        <Content>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </Content>
        <Footer />
      </Wrapper>
    </ >
  )
}

export default App
