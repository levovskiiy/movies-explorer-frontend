import React, { useMemo } from 'react'
import { classname, merge, type Bem } from '../../utils/utils'
import Button from '../UI/Button/Button'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Label from '../UI/Label/Label'
import BaseLink from '../UI/BaseLink/BaseLink'
import withForm from '../WithForm/WithForm'
import withFormPage from '../WithFormPage/WithFormPage'
import Text from '../UI/Text/Text'
import './Login.css'

type LoginProps = {
  withForm: Bem
}

function Login({ withForm }: LoginProps) {
  const withFormClasses = withForm

  const { block, element } = classname('login-form')

  const styles = useMemo(() => {
    return {
      main: merge(withFormClasses.block, block),
      loginLabel: merge(withFormClasses.element('label'), element('email-label')),
      emailInput: merge(withFormClasses.element('input'), element('email-input')),
      passwordLabel: merge(withFormClasses.element('label'), element('password-label')),
      passwordInput: merge(withFormClasses.element('input'), element('password-input')),
      formAction: merge(withFormClasses.element('form-action'), element('form-action')),
      submitButton: merge(withFormClasses.element('submit-button'), element('login')),
      link: merge(withFormClasses.element('link'), element('to-register'))
    }
  }, [])

  return (
    <Form className={styles.main}>
      <Label label='Логин' htmlFor='email' className={styles.loginLabel} />
      <Input id='email' type='email' name='email' className={styles.emailInput} />

      <Label label='Пароль' htmlFor='password' className={styles.passwordLabel} />
      <Input id='password' type='password' name='password' className={styles.passwordInput} />

      <div className={styles.formAction}>
        <Button type='submit' size="lg" variant='primary' rounded className={styles.submitButton}>Войти</Button>
        <Text>Еще не зарегистрированы?
          <BaseLink className={styles.link} variant='secondary' to={'/register'} isRoute>
            Зарегистрироваться
          </BaseLink>
        </Text>
      </div>
    </Form>
  )
}

export default withFormPage(withForm(Login), 'Рады видеть!')
