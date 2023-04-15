import React, { useEffect, type PropsWithChildren } from 'react'
import { classname } from '../../utils/utils'
import { Container, Heading } from '../UI'

import Logo from 'components/UI/Logo/Logo'
import UserService from 'utils/UserService'

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

  useEffect(() => {
    UserService.checkToken()
      .then((user) => {
        if (user._id) {
          history.back()
        }
      })
  }, [])

  return (
    <Container>
      <section className={block}>
        <div className={classnames.content}>
          <Logo className={classnames.logo} />
          <Heading className={classnames.title}>Рады видеть!</Heading>
          {children}
        </div>
      </section>
    </Container>
  )
}

export default AuthPage
