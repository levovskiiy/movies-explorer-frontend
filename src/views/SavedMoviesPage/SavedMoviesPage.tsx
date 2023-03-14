import React, { useState, type FormEvent, useEffect } from 'react'
import useSavedMovies from 'hooks/useSavedMovies'
import MoviesCardList from 'components/MoviesCardList/MoviesCardList'
import { Container, SearchForm, Heading } from 'components/UI'
import MovieService from 'utils/MovieService'
import { classname } from 'utils/utils'
import './SavedMoviesPage.css'

function SavedMoviesPage() {
  const { state, actions, handlers } = useSavedMovies(async () => await MovieService.getMovies())
  const [savedMovies, setSavedMovies] = useState(state.movies)
  const { element } = classname('saved-movies-page')

  useEffect(() => {
    setSavedMovies(state.movies)
  }, [state.movies])

  function handleSubmit(evt: FormEvent<HTMLFormElement>, queries: { search: string, isShort: boolean }) {
    const movies = handlers.find(queries.search, queries.isShort)
    setSavedMovies(movies)
  }

  return (
    <Container>
      <SearchForm handleSubmit={handleSubmit} context={{ state, actions }} />
      {
        state.movies.length === 0
          ? <Heading className={element('error-message')}>{state.error}</Heading>
          : <MoviesCardList movies={savedMovies} className={element('list')} />
      }
    </Container>
  )
}

export default SavedMoviesPage
