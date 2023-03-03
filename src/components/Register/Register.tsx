import React, { useMemo } from 'react'
import Button from '../UI/Button/Button'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Label from '../UI/Label/Label'
import BaseLink from '../UI/BaseLink/BaseLink'
import withForm, { type FormFields } from '../WithForm/WithForm'
import withFormPage from '../WithFormPage/WithFormPage'
import Text from '../UI/Text/Text'
import { classname, merge, type Bem } from '../../utils/utils'

import './Register.css'

type RegisterProps = {
  withForm: Bem
  formFields: FormFields
}

function Register({ withForm, formFields }: RegisterProps): JSX.Element {
  const { name, email, password } = formFields
  console.log(formFields)

  const withFormClasses = withForm

  const { block, element } = classname('register-form')

  const styles = useMemo(() => {
    return {
      main: merge(withFormClasses.block, block),
      nameLabel: merge(withFormClasses.element('label'), element('name-label')),
      name: merge(withFormClasses.element('input'), element('name-input')),
      loginLabel: merge(withFormClasses.element('label'), element('email-label')),
      emailInput: merge(withFormClasses.element('input'), element('email-input')),
      passwordLabel: merge(withFormClasses.element('label'), element('password-label')),
      passwordInput: merge(withFormClasses.element('input'), element('password-input')),
      formAction: merge(withFormClasses.element('form-action'), element('form-action')),
      submitButton: merge(withFormClasses.element('submit-button'), element('login')),
      link: merge(withFormClasses.element('link'), element('to-login'))
    }
  }, [])

  return (
    <Form className={styles.main}>
      <Label label='Имя' htmlFor='name' className={styles.nameLabel} />
      <Input
        value={name.value}
        onChange={name.action}
        id='name'
        type='text'
        name='name'
        className={styles.name} />

      <Label label='Логин' htmlFor='email' className={styles.loginLabel} />
      <Input
        value={email.value}
        onChange={email.action}
        id='email'
        type='email'
        name='email'
        className={styles.emailInput} />

      <Label label='Пароль' htmlFor='password' className={styles.passwordLabel} />
      <Input
        value={password.value}
        onChange={password.action}
        id='password'
        type='password'
        name='password'
        className={styles.passwordInput} />

      <div className={styles.formAction}>
        <Button type='submit' variant='primary' rounded className={styles.submitButton}>Зарегистрироваться</Button>
        <Text>Уже зарегистрированы?
          <BaseLink className={styles.link} variant='secondary' to={'/login'} isRoute>
            Войти
          </BaseLink>
        </Text>
      </div>
    </Form>
  )
}

export default withFormPage(withForm(Register), 'Добро пожаловать!')
