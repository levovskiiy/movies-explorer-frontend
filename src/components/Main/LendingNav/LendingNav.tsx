import React from 'react'
import Button from '../../UI/Button/Button'
import BaseLink from '../../UI/BaseLink/BaseLink'

import './LendingNav.css'

function LendingNav(): JSX.Element {
  return (
    <nav className='landing-nav'>
      <BaseLink to='/signup' isRoute>Регистрация</BaseLink>
      <Button to='/signin' rounded size='md' variant='secondary'>Логин</Button>
    </nav>
  )
}

export default LendingNav
