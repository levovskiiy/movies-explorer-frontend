import React, { type PropsWithChildren, useReducer, useEffect } from 'react'
import moviesReducer from './reducer'
import { type Movie } from '../../types/types'
import { type MoviesActions, MoviesContext, initialMoviesState } from './context'
import useLocalStorage from 'hooks/useLocalStorage'

export default function MoviesProvider({ children }: PropsWithChildren): JSX.Element {
  const [moviesStore, setMoviesStore] = useLocalStorage<Movie[]>('MOVIES', [])
  const [querySearchStore, setQuerySearchStore] = useLocalStorage('QUERY', '')
  const [shortStore, setShortStore] = useLocalStorage('SHORT', false)

  const [state, dispatch] = useReducer(
    moviesReducer,
    initialMoviesState,
    (data) => ({
      ...data,
      movies: moviesStore,
      query: querySearchStore,
      isShort: shortStore
    })
  )

  useEffect(() => {
    setMoviesStore(state.movies)

    return () => {
      localStorage.removeItem('MOVIES')
    }
  }, [state.movies])

  useEffect(() => {
    setQuerySearchStore(state.query)

    return () => {
      localStorage.removeItem('QUERY')
    }
  }, [state.query])

  useEffect(() => {
    setShortStore(state.isShort)

    return () => {
      localStorage.removeItem('SHORT')
    }
  }, [state.isShort])

  const actions: MoviesActions = {
    setMovies: (movies: Movie[]) => {
      dispatch({
        type: 'SET_MOVIES',
        payload: movies
      })
    },
    setLoading: (isLoading: boolean = false) => {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: isLoading
      })
    },

    setError: (message: string) => {
      dispatch({
        type: 'SET_ERROR',
        payload: message
      })
    },

    setQuery: (query: string) => {
      dispatch({
        type: 'SET_QUERY',
        payload: query
      })
    },

    setShort: (isShort: boolean) => {
      dispatch({
        type: 'SET_SHORT',
        payload: isShort
      })
    }

  }

  const value = {
    state,
    actions
  }

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
