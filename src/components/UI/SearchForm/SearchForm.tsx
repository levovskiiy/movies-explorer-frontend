import React, { useRef, type FormEvent } from 'react'

import { type MoviesState, type MoviesActions } from 'context/movies'
import { type SavedMoviesState, type SavedMoviesAction } from 'context/saved-movies'
import { Button, Divider, FilterCheckbox, Form, Input } from '../../UI/'
import { classname } from 'utils/utils'
import useForm from 'hooks/useFormValidator'

import './SearchForm.css'

type SearchFormProps = {
  handleSubmit: (evt: FormEvent<HTMLFormElement>, queris: { search: string, isShort: boolean }) => void
  context: {
    state: MoviesState | SavedMoviesState
    actions: MoviesActions | SavedMoviesAction | null
  }
}

function SearchForm({ handleSubmit, context }: SearchFormProps): JSX.Element {
  const { state, actions } = context
  const { values, handleChange, isValid, resetForm } = useForm({
    search: state.query
  })

  const ref = useRef<HTMLFormElement | null>(null)

  const { block, element } = classname('search-form')

  function onSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    handleSubmit(evt, { search: values.search, isShort: state.isShort })
    actions?.setQuery(values.search)
    resetForm({ search: '' }, { search: '' }, false)
  }

  return (
    <>
      <Form ref={ref} className={block} onSubmit={onSubmit} noValidate>
        <div className={element('container')}>
          <Input
            value={values.search}
            onChange={handleChange}
            variant='ghost'
            className={element('input')}
            type='text'
            name='search'
            placeholder='Фильм'
            required
          />
          <Button
            disabled={!isValid}
            size='xl'
            variant='primary'
            className={element('button')}
            rounded
          >
            Поиск
          </Button>
        </div>
        <FilterCheckbox label='Короткометражки' />
        <Divider className={element('divider')} />
      </Form>
    </>

  )
}

export default SearchForm
