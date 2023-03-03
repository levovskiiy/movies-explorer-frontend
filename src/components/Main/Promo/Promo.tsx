import React from 'react'
import { classname } from '../../../utils/utils'
import './Promo.css'
import Heading from '../../UI/Heading/Heading'
import Container from '../../UI/Container/Container'

const Promo = () => {
  const { block, element } = classname('promo')
  return (
    <div className={block}>
      <Container>
        <div className={element('content')}>
          <Heading className={element('header')}>
            Учебный проект студента факультета Веб-разработки.
          </Heading>
        </div>
        <div className={element('picture')}></div>
      </Container>
    </div>
  )
}

export default Promo
