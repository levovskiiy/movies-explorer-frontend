import React, { useRef, type FormEvent, type ChangeEvent } from 'react'

import { type MoviesState, type MoviesActions } from 'context/movies'
import { type SavedMoviesState, type SavedMoviesAction } from 'context/saved-movies'
import { Button, Divider, FilterCheckbox, Form, Input } from '../../UI/'
import { classname } from 'utils/utils'
import useForm from 'hooks/useFormValidator'

import './SearchForm.css'

type SearchFormProps = {
  handleSubmit: (queris: { search: string, isShort: boolean, evt?: FormEvent<HTMLFormElement> }) => void
  findMovieHandler: (query: string, isShort: boolean) => unknown
  context: {
    state: MoviesState | SavedMoviesState
    actions: MoviesActions | SavedMoviesAction | null
    handlers: any
  }
}

function SearchForm({ handleSubmit, findMovieHandler, context }: SearchFormProps): JSX.Element {
  const { state, actions } = context
  const { values, handleChange, isValid } = useForm({
    search: state.query
  })

  const ref = useRef<HTMLFormElement | null>(null)

  const { block, element } = classname('search-form')

  function onSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    handleSubmit({ search: values.search, isShort: state.isShort })
    actions?.setQuery(values.search)
  }

  function checkboxHandler(evt: ChangeEvent<HTMLInputElement>) {
    actions?.setShort(evt.target.checked)

    if (state.movies.length > 0) {
      handleSubmit({ search: values.search, isShort: evt.target.checked })
    }
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
        <FilterCheckbox onChange={checkboxHandler} isShort={state.isShort} label='Короткометражки' />
        <Divider className={element('divider')} />
      </Form>
    </>

  )
}

export default SearchForm
