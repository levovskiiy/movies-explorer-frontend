import React, { useEffect, useState } from 'react'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import { Button, Container, Preloader, SearchForm } from '../../components/UI'
import { type IMovie } from '../../types/types'
import BeatfilmService from '../../utils/BeatfilmService'

import './MoviesPage.css'

function MoviesPage() {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    BeatfilmService.getMovies()
      .then(movies => {
        setIsLoading(true)
        const data = movies.slice(0, 12)
        setMovies(data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <section className='movies' >
      <Container>
        <SearchForm />
        {
          isLoading
            ? <Preloader className='movies__preloader' />
            : <>
              <MoviesCardList movies={movies} />
              <Button className='movies__more-button' type='button' variant='tertiary' rounded>Еще</Button>
            </>
        }
      </Container>
    </section>
  )
}

export default MoviesPage
