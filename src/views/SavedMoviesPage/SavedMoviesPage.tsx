import React, { useState, type FormEvent, useEffect } from 'react'
import useSavedMovies from 'hooks/useSavedMovies'
import MoviesCardList from 'components/MoviesCardList/MoviesCardList'
import { Container, SearchForm, Heading } from 'components/UI'
import MovieService from 'utils/MovieService'
import { classname } from 'utils/utils'
import './SavedMoviesPage.css'
import { type Movie } from 'types/types'

function SavedMoviesPage() {
  const { state, actions, handlers } = useSavedMovies(async () => await MovieService.getMovies())
  const [savedMovies, setSavedMovies] = useState(state.movies)
  const { element } = classname('saved-movies-page')

  useEffect(() => {
    setSavedMovies(state.movies)
  }, [state.movies])

  function findSavedMovies(search: string, short: boolean): Movie[] {
    return handlers.find(search, short)
  }

  function handleSubmit(queries: { search: string, isShort: boolean }, evt?: FormEvent<HTMLFormElement>) {
    const movies = findSavedMovies(queries.search, queries.isShort)
    setSavedMovies(movies)
  }

  return (
    <Container>
      <SearchForm findMovieHandler={findSavedMovies} handleSubmit={handleSubmit} context={{ state, actions, handlers }} />
      {
        state.movies.length === 0
          ? <Heading className={element('error-message')}>{state.error}</Heading>
          : <MoviesCardList movies={savedMovies} className={element('list')} />
      }
    </Container>
  )
}

export default SavedMoviesPage
