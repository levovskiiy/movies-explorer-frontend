import React, { type FormEvent } from 'react'
import useSavedMovies from 'hooks/useSavedMovies'
import MoviesCardList from 'components/MoviesCardList/MoviesCardList'
import { Container, SearchForm, Heading } from 'components/UI'
import MovieService from 'utils/MovieService'
import { classname } from 'utils/utils'
import './SavedMoviesPage.css'

function SavedMoviesPage() {
  const { state, actions, handlers } = useSavedMovies(async () => await MovieService.getMovies())

  const { element } = classname('saved-movies-page')

  function handleSubmit(evt: FormEvent<HTMLFormElement>, queries: { search: string, isShort: boolean }) {
    handlers.find(queries.search, queries.isShort)
  }

  return (
    <Container>
      <SearchForm handleSubmit={handleSubmit} context={{ state, actions }} />
      {
        state.movies.length === 0
          ? <Heading className={element('error-message')}>{state.error}</Heading>
          : <MoviesCardList movies={state.movies} className={element('list')} />
      }
    </Container>
  )
}

export default SavedMoviesPage
