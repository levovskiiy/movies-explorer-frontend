import React from 'react'
import Container from '../UI/Container/Container'
import Divider from '../UI/Divider/Divider'
import BaseLink from '../UI/BaseLink/BaseLink'

import './Footer.css'
import { classname } from '../../utils/utils'

function Footer(): JSX.Element {
  const { block, element } = classname('footer')

  const classnames = {
    title: element('title'),
    content: element('content'),
    copyright: element('copyright')
  }

  return (
    <footer className={block} >
      <Container>
        <h6 className={classnames.title}>Учебный проект Яндекс.Практикум х BeatFilm.</h6>
        <Divider />
        <div className={classnames.content}>
          <span className={classnames.copyright}>
            &copy; 2022
          </span>
          <BaseLink to='https://practicum.yandex.ru/'>
            Yandex.Praktikum
          </BaseLink>
          <BaseLink to='https://github.com/levovskiiy'>GitHub</BaseLink>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
