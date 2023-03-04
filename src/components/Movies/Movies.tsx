import React, { useState } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Container from '../UI/Container/Container'
import SearchForm from '../UI/SearchForm/SearchForm'

import './Movies.css'

function Movies(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('')

  function searchQueryHandler(query: string): void {
    console.log('handler')
    setSearchQuery(query)
  }

  return (
    <section className='movies' >
      <Container>
        <SearchForm searchQuery={searchQuery} searchQueryHandler={searchQueryHandler} />
        <MoviesCardList />
      </Container>
    </section>
  )
}

export default Movies
