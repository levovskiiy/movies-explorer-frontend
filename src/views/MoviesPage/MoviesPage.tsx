import React, { useState, useRef, useEffect, type FormEvent } from 'react'

import MoviesCardList from 'components/MoviesCardList/MoviesCardList'
import { Container, SearchForm, Preloader, Button, Text } from 'components/UI'
import { type Movie } from 'types/types'
import { classname } from 'utils/utils'

import useMovies from 'hooks/useMovies'
import useMore from 'hooks/useMore'
import './MoviesPage.css'

function MoviesPage() {
  const { state, actions, handlers } = useMovies()
  const button = useRef<HTMLButtonElement | null>(null)
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>([])
  const { step, endIndex, setEndIndex } = useMore(button)
  const { block, element } = classname('movies')

  useEffect(() => {
    const initalList = state.movies.slice(0, endIndex)

    setVisibleMovies(initalList)
  }, [state.movies, state.query, step, endIndex])

  function handleMore() {
    const nextItems = state.movies.slice(endIndex, endIndex + step)
    setVisibleMovies(prev => [...prev, ...nextItems])
    setEndIndex(prev => prev + step)
  }

  async function findMovies(search: string, isShort: boolean) {
    handlers.find(search, isShort)
  }

  function handleSubmit(queries: { search: string, isShort: boolean }, evt?: FormEvent<HTMLFormElement>) {
    findMovies(queries.search, queries.isShort)
  }

  return (
    <section className={block} >
      <Container>
        <SearchForm findMovieHandler={findMovies} context={{ state, actions, handlers }} handleSubmit={handleSubmit} />
        {
          state.isLoading
            ? <Preloader className={element('preloader')} />
            : visibleMovies.length > 0
              ? (
                <>
                  <MoviesCardList movies={visibleMovies} />
                  <Button
                    ref={button}
                    onClick={handleMore}
                    className={element('more-button', {
                      hidden: state.movies.length <= 3 || state.movies.length === visibleMovies.length
                    })}
                    type='button'
                    variant='tertiary'
                    rounded
                  >
                    Еще
                  </Button>
                </>)
              : <Text className={element('error-message')}>{state.error}</Text>

        }
      </Container>
    </section>
  )
}

export default MoviesPage
