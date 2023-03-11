import React, { useContext } from 'react'
import { Button, Container, Preloader, SearchForm, Text } from '../../components/UI'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'

import { MoviesContext } from '../../context/movies/context'
import './MoviesPage.css'

function MoviesPage() {
  const { state } = useContext(MoviesContext)

  return (
    <section className='movies' >
      <Container>
        <SearchForm />
        {
          state.isLoading
            ? <Preloader className='movies__preloader' />
            : state.movies.length > 0
              ? (
                <>
                  <MoviesCardList movies={state.movies} />
                  <Button
                    className='movies__more-button'
                    type='button'
                    variant='tertiary'
                    rounded
                  >
                    Еще
                  </Button>
                </>)
              : <Text>{state.error}</Text>

        }
      </Container>
    </section>
  )
}

export default MoviesPage
