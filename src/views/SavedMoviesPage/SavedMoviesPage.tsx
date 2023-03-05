import React from 'react'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import { Container, Heading, SearchForm } from '../../components/UI'
import { type IMovie } from '../../types/types'

function SavedMoviesPage() {
  const movies: IMovie[] = []

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
