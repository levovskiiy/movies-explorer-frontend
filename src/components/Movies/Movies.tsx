import React from 'react'
import Container from '../UI/Container/Container'
import SearchForm from '../UI/SearchForm/SearchForm'
import './Movies.css'

const Movies = () => {
  return (
    <section className='movies' >
      <Container>
        <SearchForm />
      </Container>
    </section>
  )
}

export default Movies
