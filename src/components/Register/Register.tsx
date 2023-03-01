import React, { useMemo, type FC } from 'react'
import Button from '../UI/Button/Button'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Label from '../UI/Label/Label'
import BaseLink from '../UI/BaseLink/BaseLink'
import Paragraph from '../UI/Paragraph/Paragraph'
import withForm from '../WithForm/WithForm'
import withFormPage from '../WithFormPage/WithFormPage'
import { classname, merge, type Bem } from '../../utils/utils'

interface RegisterProps {
  withForm: Bem
}

const Register: FC<RegisterProps> = ({ withForm }) => {
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
      submitButton: merge(withFormClasses.element('submit-button'), element('login'))
    }
  }, [])

  return (
    <Form className={styles.main}>
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
