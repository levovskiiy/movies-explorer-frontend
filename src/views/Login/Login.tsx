import React from 'react'
import Container from '../../components/UI/Container/Container'
import Form from '../../components/UI/Form/Form'
import Heading from '../../components/UI/Heading/Heading'
import Input from '../../components/UI/Input/Input'
import Label from '../../components/UI/Label/Label'
import logo from '../../images/logo.svg'
import { bem } from '../../utils/utils'

import './Login.css'

const Login = () => {
  const [login, cs] = bem({
    block: 'login-page'
  })

  return (
    <Container>
      <section className={login}>
        <div className={cs('content')}>
          <img src={logo} alt="Логотип" className={cs('logo')} />
          <Heading as='h1' className={cs('title')}>Рады видеть</Heading>
          <Form onSubmit={() => 1} className={cs('form')}>
            <Label label='Логин' htmlFor='email' className={cs('label-input')} />
            <Input id='email' type='email' name='email' className={cs('login-input')} />

            <Label label='Пароль' htmlFor='password' className={cs('password-label')} />
            <Input id='password' type='password' name='password' className={cs('password-input')} />
          </Form>
        </div>
      </section>
    </Container>
  )
}

export default Login
