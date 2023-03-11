import React from 'react'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import { Container, Heading, SearchForm } from '../../components/UI'
import { type Movie } from '../../types/types'

function SavedMoviesPage() {
  const movies: Movie[] = []

  return (
    <Container>
      <SearchForm />
      {
        movies.length === 0
          ? <Heading>Сохраненных фильмов пока нет</Heading>
          : <MoviesCardList movies={movies} />
      }
    </Container>
  )
}

export default SavedMoviesPage
