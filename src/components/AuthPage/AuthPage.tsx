import React, { type PropsWithChildren } from 'react'
import { classname } from '../../utils/utils'
import { Container, Heading } from '../UI'
import logo from '../../images/logo.svg'

import './AuthPage.css'

type AuthPageProps = {
  title: string
}

function AuthPage({ children }: PropsWithChildren<AuthPageProps>): JSX.Element {
  const { block, element } = classname('auth-page')

  const classnames = {
    content: element('content'),
    logo: element('logo'),
    title: element('title')
  }
  return (
    <Container>
      <section className={block}>
        <div className={classnames.content}>
          <img src={logo} alt="Логотип" className={classnames.logo} />
          <Heading className={classnames.title}>Рады видеть!</Heading>
          {children}
        </div>
      </section>
    </Container>
  )
}

export default AuthPage
