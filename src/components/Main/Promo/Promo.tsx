import React from 'react'
import Container from '../../UI/Container/Container'
import Heading from '../../UI/Heading/Heading'
import './Promo.css'

const Promo = () => {
  return (
    <div className='promo'>
      <Container>
        <div className='promo__content'>
          <Heading size='xl' className='promo__header'>
            Учебный проект студента факультета Веб-разработки.
          </Heading>
          <div className='promo__picture'></div>
        </div>
      </Container>
    </div>
  )
}

export default Promo
