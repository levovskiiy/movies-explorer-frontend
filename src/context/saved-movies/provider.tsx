import React, { type PropsWithChildren, useReducer } from 'react'
import { type Movie } from 'types/types'
import { type SavedMoviesAction } from './action'
import { SavedMoviesContext } from './context'
import { savedMovieReducer } from './reducer'
import { initialSavedMoviesState } from './state'

export default function SavedMoviesProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(savedMovieReducer, initialSavedMoviesState)

  const actions: SavedMoviesAction = {
    clear: () => {
      dispatch({
        type: 'CLEAR'
      })
    },

    saveMovies: (movies: Movie[]) => {
      dispatch({
        type: 'SAVE_MOVIES',
        payload: movies
      })
    },
    saveMovie: (movie: Movie) => {
      dispatch({
        type: 'SAVE_MOVIE',
        payload: movie
      }
      )
    },

    deleteMovie: (movieId: number) => {
      dispatch({
        type: 'REMOVE_SAVED_MOVIE',
        payload: movieId
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
    },

    setLoading: (isLoading: boolean) => {
      dispatch({
        type: 'SET_LOADING',
        payload: isLoading
      })
    }
  }

  const value = {
    state,
    actions
  }

  return (
    <SavedMoviesContext.Provider value={value}>
      {children}
    </SavedMoviesContext.Provider>
  )
}
