import React from 'react'
import useForm from '../../hooks/useFormValidator'
import { classname } from '../../utils/utils'
import { Button, Form, Input, InputErrorMessage, InputLabel, InputWrapper, Text, BaseLink } from '../UI'

import './AuthForm.css'

type AuthFromProps = {
  type: 'register' | 'login'
}

function AuthForm({ type }: AuthFromProps): JSX.Element {
  const { values, errors, handleChange, isValid, checkValidity } = useForm({
    name: '',
    password: '',
    email: ''
  })

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

  return (
    <Form className={block} noValidate>
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
          Войти
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
