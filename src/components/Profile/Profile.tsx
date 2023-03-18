import React, { type FormEvent, useEffect, useRef, useReducer } from 'react'
import { classname, emailValidator } from '../../utils/utils'
import { Button, Container, Divider, Form, Heading, Input, InputLabel, InputWrapper } from '../UI'

import useForm from 'hooks/useFormValidator'
import useUser from 'hooks/useUser'
import UserService from 'utils/UserService'
import { UserActions } from 'context/user/actions'
import { type UserState } from 'context/user/context'
import profileReducer, { initialState } from 'reducers/profile/reducer'
import { ProfileActions } from 'reducers/profile/actions'
import useSavedMovies from 'hooks/useSavedMovies'
import useMovies from 'hooks/useMovies'

import './Profile.css'

function Profile() {
  const { state, dispatch } = useUser()
  const { actions: savedActions } = useSavedMovies()
  const { actions: moviesActions } = useMovies()
  const { values, handleChange, isValid, setValues } = useForm({ name: state.name, email: state.email }, {
    email: (email: string) => emailValidator(email)
  })
  const [localState, localDispatch] = useReducer(profileReducer, initialState)
  const form = useRef<HTMLFormElement>(null)

  const { block, element } = classname('profile')

  useEffect(() => {
    setValues({ name: state.name, email: state.email })
  }, [state])

  useEffect(() => {
    function isValidForm() {
      return isValid && (values.name !== state.name || values.email !== state.email)
    }

    localDispatch({
      type: ProfileActions.SET_FORM_VALID,
      payload: isValidForm()
    })
  }, [values])

  async function handleUpdateUser(user: UserState) {
    try {
      const updatedUser = await UserService.updateUser({ name: user.name, email: user.email })

      if (updatedUser) {
        dispatch({ type: UserActions.UPDATE, payload: updatedUser })
        localDispatch({
          type: ProfileActions.SET_ERROR,
          payload: { status: 'SUCCESS', message: 'Данные успено изменены' }
        })
      }
    } catch (error: any) {
      localDispatch({
        type: ProfileActions.SET_ERROR,
        payload: { status: 'SUCCESS', message: error.message }
      })
    }
  }

  async function handleLogout() {
    try {
      await UserService.logout()
      dispatch({ type: UserActions.SIGNOUT, payload: null })
      savedActions?.clear()
      moviesActions?.clear()
      localStorage.clear()
    } catch (error: any) {
      localDispatch({
        type: ProfileActions.SET_ERROR,
        payload: { status: 'FAIL', message: error.message }
      })
    }
  }

  function handleClick() {
    handleLogout()
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    handleUpdateUser(values as UserState)
    form.current?.reset()
    localDispatch({ type: ProfileActions.RESET })
  }

  return (
    <Container>
      <section className={block}>
        <Form ref={form} className={element('form')} noValidate onSubmit={handleSubmit}>
          <Heading className={element('title')}>Привет, {state.name}</Heading>

          <InputWrapper className={element('field-container')}>
            <InputLabel htmlFor="name" className={element('label', { visible: !localState.nameVisible })} label={state.name} />
            <Input
              onFocus={() => {
                localDispatch({ type: ProfileActions.SET_NAME_VISIBLE, payload: false })
              }}
              onBlur={() => {
                localDispatch({ type: ProfileActions.SET_NAME_VISIBLE, payload: true })
              }}
              minLength={3}
              maxLength={30}
              placeholder='Имя'
              value={localState.nameVisible ? '' : values.name}
              onChange={handleChange}
              variant='profile'
              type="text"
              name='name'
              id='name'
              className={element('input', { type: 'name' })}
            />
          </InputWrapper>

          <Divider />

          <InputWrapper className={element('field-container')}>
            <InputLabel
              htmlFor="email"
              className={
                element('label', {
                  visible: !localState.emailVisible
                })}
              label={state.email}
            />
            <Input
              onFocus={() => {
                localDispatch({ type: ProfileActions.SET_EMAIL_VISIBLE, payload: false })
              }}
              onBlur={() => {
                localDispatch({ type: ProfileActions.SET_EMAIL_VISIBLE, payload: true })
              }}
              placeholder='Email'
              value={localState.emailVisible ? '' : values.email}
              onChange={handleChange}
              variant='profile'
              type="email"
              name='email'
              id='email'
              className={element('input', { type: 'email' })
              }
            />
          </InputWrapper>

          <span className={element('status')}>
            {localState.error.message}
          </span>
          <div className={element('actions')}>
            <Button
              disabled={!localState.formValid}
              type='submit'
              variant='link'
              className={element('action-edit')}>
              Редактировать
            </Button>
            <Button onClick={handleClick} type='button' variant='danger' className={element('action-leave')}>Выйти из акканута</Button>
          </div>
        </Form>
      </section>
    </Container>
  )
}

export default Profile
