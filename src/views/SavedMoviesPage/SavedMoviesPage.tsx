import React from 'react'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import { Container, SearchForm } from '../../components/UI'
import { type IMovie } from '../../types/types'

function SavedMoviesPage() {
  const movies: IMovie[] = []

  return (
    <Container>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </Container>
  )
}

export default SavedMoviesPage
