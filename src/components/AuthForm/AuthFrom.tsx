import React from 'react'
import { classname } from '../../utils/utils'
import { Button, Form, TextInput, Text, BaseLink } from '../UI'

import './AuthForm.css'

type AuthFromProps = {
  type: 'register' | 'login'
}

function AuthForm({ type }: AuthFromProps): JSX.Element {
  const { block, element } = classname('auth-form', { type })

  const classnames = {
    formAction: element('form-actions'),
    input: element('input'),
    submitButton: element('submit'),
    to: element('to')
  }

  return (
    <Form className={block}>
      {
        type === 'register' && (
          <TextInput
            className={element('input')}
            type='text'
            label='Имя'
            id='name'
            name='name'
          />
        )
      }
      <TextInput
        className={element('input')}
        type='email'
        label='Email'
        id='email'
        name='email'
      />
      <TextInput
        className={element('input')}
        type='passowrd'
        label='Пароль'
        id='password'
        name='password'
      />
      <div className={classnames.formAction}>
        <Button
          type='submit'
          size="lg"
          variant='primary'
          rounded
          className={classnames.submitButton}>
          Войти
        </Button>
        <Text> {type === 'login' ? 'Еще не зарегистрированы?' : 'Уже зарегистрированы?'}
          <BaseLink className={classnames.to} variant='secondary' to={type === 'login' ? '/signup' : '/signin'} isRoute>
            {type === 'login' ? 'Зарегистрироваться' : 'Войти'}
          </BaseLink>
        </Text>
      </div>
    </Form>
  )
}

export default AuthForm
