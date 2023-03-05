import React from 'react'
import AuthForm from '../../components/AuthForm/AuthFrom'
import AuthPage from '../../components/AuthPage/AuthPage'

function LoginPage(): JSX.Element {
  return (
    <AuthPage title='Рады видеть!'>
      <AuthForm type='login' />
    </AuthPage>
  )
}

export default LoginPage
