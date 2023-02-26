import React from 'react'
import Button from '../../UI/Button/Button'
import './NavTab.css'

const NavTab = () => {
  return (
    <nav>
      <Button rounded size='md' variant='secondary'>Регистрация</Button>
      <Button rounded size='md' variant='secondary'>Логин</Button>
    </nav>
  )
}

export default NavTab
