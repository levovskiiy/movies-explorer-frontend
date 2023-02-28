import React, { useMemo, type FC } from 'react'
import Button from '../UI/Button/Button'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Label from '../UI/Label/Label'
import BaseLink from '../UI/BaseLink/BaseLink'
import Paragraph from '../UI/Paragraph/Paragraph'
import { bem, merge, type BemConfigurator } from '../../utils/utils'
import withForm from '../WithForm/WithForm'
import withFormPage from '../WithFormPage/WithFormPage'

interface RegisterProps {
  bemConfigurator: BemConfigurator
}

const Register: FC<RegisterProps> = ({ bemConfigurator }) => {
  const [registerBlock, registerClasses] = bemConfigurator

  const styles = useMemo(() => {
    const [registerForm, registerFormClasses] = bem({
      block: 'register-form'
    })

    return {
      main: merge(registerForm, registerBlock),
      nameLabel: merge(registerClasses('label'), registerFormClasses('name-label')),
      name: merge(registerClasses('input'), registerFormClasses('name-input')),
      loginLabel: merge(registerClasses('label'), registerFormClasses('email-label')),
      emailInput: merge(registerClasses('input'), registerFormClasses('email-input')),
      passwordLabel: merge(registerClasses('label'), registerFormClasses('password-label')),
      passwordInput: merge(registerClasses('input'), registerFormClasses('password-input')),
      formAction: merge(registerClasses('form-action'), registerFormClasses('form-action')),
      submitButton: merge(registerClasses('submit-button'), registerFormClasses('login'))
    }
  }, [])

  return (
    <Form onSubmit={() => 1} className={styles.main}>
      <Label label='Имя' htmlFor='name' className={styles.nameLabel} />
      <Input id='name' type='text' name='name' className={styles.name} />

      <Label label='Логин' htmlFor='email' className={styles.loginLabel} />
      <Input id='email' type='email' name='email' className={styles.emailInput} />

      <Label label='Пароль' htmlFor='password' className={styles.passwordLabel} />
      <Input id='password' type='password' name='password' className={styles.passwordInput} />

      <div className={styles.formAction}>
        <Button type='submit' variant='primary' rounded className={styles.submitButton}>Зарегистрироваться</Button>
        <Paragraph>Уже зарегистрированы? <BaseLink variant='secondary' to={'/login'} isRoute>Войти</BaseLink></Paragraph>
      </div>
    </Form>
  )
}

export default withFormPage(withForm(Register), 'Добро пожаловать!')
