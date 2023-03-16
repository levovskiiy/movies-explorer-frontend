import React, { type FormEvent, useState } from 'react'
import useForm from '../../hooks/useFormValidator'
import { classname, emailValidator } from '../../utils/utils'
import { Button, Form, Input, InputErrorMessage, InputLabel, InputWrapper, Text, BaseLink } from '../UI'

import './AuthForm.css'
import useUser from 'hooks/useUser'
import UserService from 'utils/UserService'
import { UserActions } from 'context/user/actions'
import { type User } from 'types/types'
import { useNavigate } from 'react-router-dom'

type AuthFromProps = {
  type: 'register' | 'login'
}

function AuthForm({ type }: AuthFromProps): JSX.Element {
  const { values, errors, handleChange, isValid, checkValidity } = useForm<User, HTMLInputElement>({
    name: '',
    password: '',
    email: ''
  }, {
    email: (value) => emailValidator(value)
  })

  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState({
    status: false,
    message: ''
  })

  const { dispatch, state } = useUser()
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
      setLoading(true)
      const response = await UserService.login(user)
      if (response) {
        console.log(user)
        dispatch({
          type: UserActions.SIGNIN,
          payload: {
            _id: user._id,
            name: state.name,
            email: user.email,
            isLoggedIn: true
          }
        })
        setError({ status: false, message: '' })
        navigate('/movies')
      }
    } catch (error: any) {
      if (error.message === 'Unauthorized') {
        setError({ status: true, message: 'Пользователя с таким email не существует' })
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleRegister(user: User) {
    try {
      setLoading(true)
      const response = await UserService.register(user)

      if (response) {
        dispatch({ type: UserActions.SIGNUP, payload: { ...response, isLoggedIn: false } })
        setError({ status: false, message: '' })
        navigate('/signin')
      }
    } catch (error: any) {
      if (error.message === 'Conflict') {
        setError({ status: true, message: 'Пользователь с таким email уже существует' })
      }
    } finally {
      setLoading(false)
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
    <Form className={block} onSubmit={handleSubmit}>
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
              minLength={2}
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
      <InputErrorMessage message={error.message} className={classnames.inputError} />
      <div className={classnames.formAction}>
        <Button
          isLoading={isLoading}
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
