import React, { type FormEvent, useEffect, useState } from 'react'
import useForm from '../../hooks/useFormValidator'
import { classname } from '../../utils/utils'
import { Button, Form, Input, InputErrorMessage, InputLabel, InputWrapper, Text, BaseLink } from '../UI'

import './AuthForm.css'
import useUser from 'hooks/useUser'
import UserService from 'utils/UserService'
import { UserActions } from 'context/user/actions'
import { type User } from 'types/types'
import { redirect, useNavigate } from 'react-router-dom'

type AuthFromProps = {
  type: 'register' | 'login'
}

function AuthForm({ type }: AuthFromProps): JSX.Element {
  const { values, errors, handleChange, isValid, checkValidity } = useForm<User, HTMLInputElement>({
    name: '',
    password: '',
    email: ''
  })

  const [error, setError] = useState({
    status: false,
    message: ''
  })

  const { dispatch } = useUser()
  const navigate = useNavigate()

  const { block, element } = classname('auth-form', { type })

  const classnames = {
    formAction: element('form-actions'),
    input: element('input'),
    inputLabel: element('input-label'),
    inputWrapper: element('input-wrapper'),
    inputError: element('input-error'),
    submitButton: element('submit'),
    text: element('text'),
    to: element('to')
  }

  async function handleLogin(user: User) {
    try {
      const response = await UserService.login(user)
      if (response) {
        dispatch({ type: UserActions.SIGNIN, payload: { ...user, isLoggedIn: true } })
        setError({ status: false, message: '' })
        navigate('/movies')
      }
    } catch (error: any) {
      setError({ status: true, message: error.message })
    }
  }

  async function handleRegister(user: User) {
    try {
      const response = await UserService.register(user)
      if (response) {
        dispatch({ type: UserActions.SIGNUP, payload: { ...user, isLoggedIn: false } })
        setError({ status: false, message: '' })
        navigate('/signin')
      }
    } catch (error: any) {
      setError({ status: true, message: error.message })
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (type === 'register') {
      handleRegister(values)
    } else {
      handleLogin(values)
    }
  }

  return (
    <Form className={block} noValidate onSubmit={handleSubmit}>
      {
        type === 'register' && (
          <InputWrapper className={classnames.inputWrapper}>
            <InputLabel label='Имя' htmlFor="name" className={classnames.inputLabel} />
            <Input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className={classnames.input}
              error={checkValidity('name')}
              minLength={3}
              maxLength={30}
              required
            />
            <InputErrorMessage message={errors.name} className={classnames.inputError} />
          </InputWrapper>
        )}
      <InputWrapper className={classnames.inputWrapper}>
        <InputLabel label='Email' htmlFor="email" className={classnames.inputLabel} />
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email ?? ''}
          onChange={handleChange}
          className={classnames.input}
          error={checkValidity('email')}
          required
        />
        <InputErrorMessage message={errors.email} className={classnames.inputError} />
      </InputWrapper>
      <InputWrapper className={classnames.inputWrapper}>
        <InputLabel label='Пароль' htmlFor="password" className={classnames.inputLabel} />
        <Input
          id="password"
          name="password"
          type="password"
          value={values.password ?? ''}
          onChange={handleChange}
          className={classnames.input}
          error={checkValidity('password')}
          minLength={8}
          maxLength={24}
          required
        />
        <InputErrorMessage message={errors.password} className={classnames.inputError} />
      </InputWrapper>
      <div className={classnames.formAction}>
        <Button
          disabled={!isValid}
          type='submit'
          size="lg"
          variant='primary'
          rounded
          className={classnames.submitButton}>
          {type === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
        <Text className={classnames.text}> {type === 'login' ? 'Еще не зарегистрированы?' : 'Уже зарегистрированы?'}
          <BaseLink className={classnames.to} variant='secondary' to={type === 'login' ? '/signup' : '/signin'} isRoute>
            {type === 'login' ? 'Регистрация' : 'Войти'}
          </BaseLink>
        </Text>
      </div>
    </Form>
  )
}

export default AuthForm
