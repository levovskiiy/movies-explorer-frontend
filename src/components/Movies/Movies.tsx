import React from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Container from '../UI/Container/Container'
import SearchForm from '../UI/SearchForm/SearchForm'
import './Movies.css'

const Movies = () => {
  return (
    <section className='movies' >
      <Container>
        <SearchForm />
        <MoviesCardList />
      </Container>
    </section>
  )
}

export default Movies
