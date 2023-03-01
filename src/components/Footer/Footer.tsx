import React, { type FC } from 'react'
import Container from '../UI/Container/Container'
import Divider from '../UI/Divider/Divider'
import Heading from '../UI/Heading/Heading'
import BaseLink from '../UI/BaseLink/BaseLink'

import './Footer.css'
import { classname } from '../../utils/utils'

const Footer: FC = () => {
  const { block, element } = classname('footer')

  const classnames = {
    title: element('title'),
    content: element('content'),
    copyright: element('copyright')
  }

  return (
    <footer className={block} >
      <Container>
        <Heading as='h6' size='mb' className={classnames.title}>Учебный проект Яндекс.Практикум х BeatFilm.</Heading>
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
