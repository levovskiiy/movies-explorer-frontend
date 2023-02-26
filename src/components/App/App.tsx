import React from 'react'
import Header from '../Header/Header'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'

function App () {
  return (
    <div className="App">
        <Header isLoggin={false}/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
    </div>
  )
}

export default App
