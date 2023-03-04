import React, { useEffect, useState } from 'react'
import { type IMovie } from '../../types/types'
import MoviesService from '../../utils/MoviesService'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Container from '../UI/Container/Container'
import SearchForm from '../UI/SearchForm/SearchForm'

import './Movies.css'

function Movies(): JSX.Element {
  const [, setMovies] = useState<IMovie[] | null>(null)

  useEffect(() => {
    MoviesService.getMovies()
      .then(response => {
        return response.json()
      })
      .then(movies => {
        const data = movies.slice(0, 6)
        setMovies(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
