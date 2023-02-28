import React, { useMemo, type FC } from 'react'
import Button from '../UI/Button/Button'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Label from '../UI/Label/Label'
import BaseLink from '../UI/BaseLink/BaseLink'
import Paragraph from '../UI/Paragraph/Paragraph'
import { bem, merge, type BemConfigurator } from '../../utils/utils'
import withForm from '../WithForm/WithForm'
import './Login.css'
import withFormPage from '../WithFormPage/WithFormPage'

interface LoginProps {
  bemConfigurator: BemConfigurator
}

const Login: FC<LoginProps> = ({ bemConfigurator, ...props }) => {
  const [loginBlock, loginClasses] = bemConfigurator

  const styles = useMemo(() => {
    const [loginForm, loginFormClasses] = bem({
      block: 'login-form'
    })

    return {
      main: merge(loginForm, loginBlock),
      loginLabel: merge(loginClasses('label'), loginFormClasses('email-label')),
      emailInput: merge(loginClasses('input'), loginFormClasses('email-input')),
      passwordLabel: merge(loginClasses('label'), loginFormClasses('password-label')),
      passwordInput: merge(loginClasses('input'), loginFormClasses('password-input')),
      formAction: merge(loginClasses('form-action'), loginFormClasses('form-action')),
      submitButton: merge(loginClasses('submit-button'), loginFormClasses('login'))
    }
  }, [])

  return (
    <Form onSubmit={() => 1} className={styles.main}>
      <Label label='Логин' htmlFor='email' className={styles.loginLabel} />
      <Input id='email' type='email' name='email' className={styles.emailInput} />

      <Label label='Пароль' htmlFor='password' className={styles.passwordLabel} />
      <Input id='password' type='password' name='password' className={styles.passwordInput} />

      <div className={styles.formAction}>
        <Button type='submit' variant='primary' rounded className={styles.submitButton}>Войти</Button>
        <Paragraph>Еще не зарегистрированы? <BaseLink variant='secondary' to={'/register'} isRoute>Зарегистрироваться</BaseLink></Paragraph>
      </div>
    </Form>
  )
}

export default withFormPage(withForm(Login), 'Рады видеть!')
