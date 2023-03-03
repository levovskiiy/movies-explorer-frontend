import React, { type FC, type ComponentType, useState, type ChangeEvent, type ChangeEventHandler } from 'react'
import { classname, type Bem } from '../../utils/utils'
import './WithForm.css'

type Fields = 'email' | 'password' | 'name'

export type FormFields = Record<Fields, { value: string, action: ChangeEventHandler<HTMLInputElement> }>

type WithFormProps = {
  withForm: Bem
  formFields: FormFields
}

function withForm<P extends WithFormProps>(WrappedComponent: ComponentType<P>): FC<Omit<P, keyof WithFormProps>> {
  const WithForm = (props: Omit<P, keyof WithFormProps>) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    function handleEmail(e: ChangeEvent<HTMLInputElement>) {
      setEmail(e.target.value)
    }

    function handlePassword(e: ChangeEvent<HTMLInputElement>) {
      setPassword(e.target.value)
    }

    function handleName(e: ChangeEvent<HTMLInputElement>) {
      setName(e.target.value)
    }

    const withForm = classname('with-form')

    return (
      <WrappedComponent
        {...props as P}
        withForm={withForm}
        formFields={
          {
            email: { value: email, action: handleEmail },
            password: { value: password, action: handlePassword },
            name: { value: name, action: handleName }
          }
        } />
    )
  }

  return WithForm
}

export default withForm
