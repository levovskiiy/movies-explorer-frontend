import React from 'react'
import Container from '../../UI/Container/Container'
import { classname } from '../../../utils/utils'
import './Promo.css'

const Promo = () => {
  const { block, element } = classname('promo')
  return (
    <div className={block}>
      <Container>
        <div className={element('content')}>
          <h1 className={element('header')}>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <div className={element('picture')}></div>
        </div>
      </Container>
    </div>
  )
}

export default Promo
