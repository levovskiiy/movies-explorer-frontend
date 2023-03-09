import React, { type ChangeEvent, useState, useContext, type FormEvent } from 'react'
import { classname } from '../../utils/utils'
import { BaseLink, Button, Container, Divider, Form, Heading, Input, InputErrorMessage, InputLabel, InputWrapper } from '../UI'

import './Profile.css'
import UserContext from 'context/user.context'
import UserService from 'utils/UserService'
import useForm from 'hooks/useFormValidator'
import { UserActions } from 'components/reducers/user/user.reducer'

function Profile() {
  const { state, dispatch } = useContext(UserContext)
  const { values, handleChange } = useForm({ name: state?.name ?? '', email: state?.email ?? '' })
  const [nameVisible, setNameVisible] = useState(true)
  const [emailVisible, setEmailVisible] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const { block, element } = classname('profile')

  function handleName(evt: ChangeEvent<HTMLInputElement>): void {
    handleChange(evt)

    if (evt.target.value.length > 0) {
      setNameVisible(false)
    } else {
      setNameVisible(true)
    }
  }

  function handleEmail(evt: ChangeEvent<HTMLInputElement>): void {
    handleChange(evt)

    if (evt.target.value.length > 0) {
      setEmailVisible(false)
    } else {
      setEmailVisible(true)
    }
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    UserService
      .updateUser(values)
      .then((updatedData) => {
        const { name, email } = updatedData
        dispatch({ type: UserActions.UPDATE, payload: { name, email } })
      })
      .catch(err => { setErrorMessage(err.message) })
  }

  return (
    <Container>
      <section className={block}>
        <Form className={element('form')} onSubmit={handleSubmit}>
          <Heading className={element('title')}>Привет, {state?.name}</Heading>

          <InputWrapper className={element('field-container')}>
            <InputLabel htmlFor="name" className={element('label', { visible: !nameVisible })} label={state?.name ?? ''} />
            <Input
              placeholder='Имя'
              onChange={handleName}
              variant='profile'
              type="text"
              name='name'
              id='name'
              className={element('input', { type: 'name' })} />
          </InputWrapper>

          <Divider />

          <InputWrapper className={element('field-container')}>
            <InputLabel htmlFor="email" className={element('label', { visible: !emailVisible })} label={state?.email ?? ''} />
            <Input
              placeholder='Email'
              onChange={handleEmail}
              variant='profile'
              type="email"
              name='email'
              id='email'
              className={element('input', { type: 'email' })} />
            <InputErrorMessage message={errorMessage} />
          </InputWrapper>

          <div className={element('actions')}>
            <Button type='submit' variant='link' className={element('action-edit')}>Редактировать</Button>
            <BaseLink variant='danger' className={element('action-leave')} to={''}>Выйти из акканута</BaseLink>
          </div>
        </Form>
      </section>
    </Container>
  )
}

export default Profile
