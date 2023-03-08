import React from 'react'
import AuthForm from '../../components/AuthForm/AuthFrom'
import AuthPage from '../../components/AuthPage/AuthPage'

function RegisterPage(): JSX.Element {
  return (
    <AuthPage title='Добро пожаловать!'>
      <AuthForm type='register' />
    </AuthPage>
  )
}

export default RegisterPage
