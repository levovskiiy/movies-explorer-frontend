import React from 'react'
import useForm from '../../hooks/useFormValidator'
import { classname } from '../../utils/utils'
import { Button, Form, TextInput, Text, BaseLink } from '../UI'

import './AuthForm.css'

type AuthFromProps = {
  type: 'register' | 'login'
}

function AuthForm({ type }: AuthFromProps): JSX.Element {
  const { values, errors, handleChange, isValid } = useForm()

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
            value={values.name || ''}
            onChange={handleChange}
            error={!isValid}
            errorMessage={errors.name}
            className={element('input')}
            type='text'
            label='Имя'
            id='name'
            name='name'
            minLength={2}
            maxLength={30}
            required
          />
        )
      }
      <TextInput
        value={values.email || ''}
        onChange={handleChange}
        error={!isValid}
        errorMessage={errors.email}
        className={element('input')}
        type='email'
        label='Email'
        id='email'
        name='email'
        required
      />
      <TextInput
        value={values.password || ''}
        onChange={handleChange}
        error={!isValid}
        errorMessage={errors.password}
        className={element('input')}
        type='password'
        label='Пароль'
        id='password'
        name='password'
        required
        minLength={8}
        maxLength={25}
        autoComplete='on'
      />
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
