import React, { type FormEvent, useContext } from 'react'
import Form from '../Form/Form'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

import Divider from '../Divider/Divider'
import useForm from 'hooks/useFormValidator'
import { MoviesContext } from '../../../context/movies/context'
import BeatfilmService from '../../../utils/BeatfilmService'

import './SearchForm.css'

function SearchForm(): JSX.Element {
  const { state, actions } = useContext(MoviesContext)

  const { values, handleChange, isValid } = useForm({
    search: state.query
  })

  const { block, element } = classname('search-form')

  async function onSubmit() {
    const { search } = values

    actions?.setLoading(true)
    try {
      const movies = await BeatfilmService.getMovies()
      const findedMovies = movies.filter(({ nameRU }) => (
        nameRU
          .toLowerCase()
          .includes(search.toLowerCase())
      ))

      const result = state.isShort
        ? findedMovies.filter(({ duration }) => duration <= 40)
        : findedMovies

      if (result.length === 0) {
        actions?.setError('Ничего не найдено')
        actions?.setMovies([])
      } else {
        actions?.setError('')
        actions?.setMovies(result)
      }
    } catch (error: any) {
      actions?.setError('Что-то произошло на сервере. Попробуйте перезагрузить страницу и сделать запрос снова.')
    } finally {
      actions?.setLoading(false)
    }
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    actions?.setQuery(values.search)

    onSubmit()
  }

  return (
    <>
      <Form className={block} onSubmit={handleSubmit}>
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
          <Button disabled={!isValid} size='xl' rounded variant='primary' className={element('button')}>Поиск</Button>
        </div>
        <FilterCheckbox label='Короткометражки' />
        <Divider className={element('divider')} />
      </Form>
    </>

  )
}

export default SearchForm
