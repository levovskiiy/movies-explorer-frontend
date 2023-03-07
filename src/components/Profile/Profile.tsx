import React, { type ChangeEvent, useState } from 'react'
import { classname } from '../../utils/utils'
import { BaseLink, Button, Container, Divider, Form, Heading, Input, InputLabel, InputWrapper } from '../UI'

import './Profile.css'

function Profile() {
  const { block, element } = classname('profile')
  const { username, email } = { username: 'lev', email: 'levovskiiy@yandex.ru' }
  const [nameVisible, setNameVisible] = useState(true)
  const [emailVisible, setEmailVisible] = useState(true)
  const [disabled, setDisabled] = useState(true)

  function handleName(evt: ChangeEvent<HTMLInputElement>): void {
    if (evt.target.value.length > 0) {
      setNameVisible(false)
    } else {
      setNameVisible(true)
    }
  }

  function handleEmail(evt: ChangeEvent<HTMLInputElement>): void {
    if (evt.target.value.length > 0) {
      setEmailVisible(false)
    } else {
      setEmailVisible(true)
    }
  }

  function handleDisabled(): void {
    setDisabled(false)
  }

  return (
    <Container>
      <section className={block}>
        <Form className={element('form')} onSubmit={(e) => { e.preventDefault() }}>
          <Heading className={element('title')}>Привет, Лев</Heading>

          <InputWrapper className={element('field-container')}>
            <InputLabel htmlFor="name" className={element('label', { visible: !nameVisible })} label={username} />
            <Input
              placeholder='Имя'
              disabled={disabled}
              onChange={handleName}
              variant='profile'
              type="text"
              name='name'
              id='name'
              className={element('input', { type: 'name' })} />
          </InputWrapper>

          <Divider />

          <InputWrapper className={element('field-container')}>
            <InputLabel htmlFor="email" className={element('label', { visible: !emailVisible })} label={email} />
            <Input
              placeholder='Email'
              disabled={disabled}
              onChange={handleEmail}
              variant='profile'
              type="email"
              name='email'
              id='email'
              className={element('input', { type: 'email' })} />
          </InputWrapper>

          <div className={element('actions')}>
            <Button onClick={handleDisabled} variant='link' className={element('action-edit')}>Редактировать</Button>
            <BaseLink variant='danger' className={element('action-leave')} to={''}>Выйти из акканута</BaseLink>
          </div>
        </Form>
      </section>
    </Container>
  )
}

export default Profile
