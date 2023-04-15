import { createContext } from 'react'
import { type MoviesActions } from './action'
import { initialMoviesState, type MoviesState } from './state'

export const MoviesContext = createContext<{
  state: MoviesState
  actions: MoviesActions | null
}>({
  state: initialMoviesState,
  actions: null
})
