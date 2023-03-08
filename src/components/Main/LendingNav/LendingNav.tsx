import React from 'react'
import { BaseLink, Button } from '../../UI'

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
