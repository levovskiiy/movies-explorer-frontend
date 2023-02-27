import React from 'react'
import Button from '../../UI/Button/Button'
import BaseLink from '../../UI/Link/BaseLink'
import './NavTab.css'

const NavTab = () => {
  return (
    <nav>
      <BaseLink to='/register' isRoute>Регистрация</BaseLink>
      <Button to='/login' rounded size='md' variant='secondary'>Логин</Button>
    </nav>
  )
}

export default NavTab
