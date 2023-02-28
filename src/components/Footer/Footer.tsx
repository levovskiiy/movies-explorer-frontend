import React, { type FC } from 'react'
import Container from '../UI/Container/Container'
import Divider from '../UI/Divider/Divider'
import Heading from '../UI/Heading/Heading'
import BaseLink from '../UI/BaseLink/BaseLink'

import './Footer.css'

const Footer: FC = () => (
  <footer className="footer">
    <Container>
      <Heading as='h6' size='mb' className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</Heading>
      <Divider />
      <div className="footer__content">
        <span className="footer__copyright">
          &copy; 2022
        </span>
        <BaseLink to='https://practicum.yandex.ru/' className="footer__yandex">
          Yandex.Praktikum
        </BaseLink>
        <BaseLink to='https://github.com/levovskiiy'>GitHub</BaseLink>
      </div>
    </Container>
  </footer >
)

export default Footer
