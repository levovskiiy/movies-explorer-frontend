import React from 'react'
import Promo from './Promo/Promo'
import './Main.css'
import AboutProject from './AboutProject/AboutProject'

const Main = () => {
  return (
    <main className='main'>
      <Promo />
      <AboutProject />
    </main>
  )
}

export default Main
