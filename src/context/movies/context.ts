import { createContext } from 'react'
import { type Movie } from '../../types/types'

export type MoviesState = {
  movies: Movie[]
  isLoading: boolean
  error: string
  query: string
  isShort: boolean
}

export type MoviesActions = {
  setMovies: (movies: Movie[]) => void
  setLoading: (isLoading: boolean) => void
  setError: (message: string) => void
  setShort: (isShort: boolean) => void
  setQuery: (query: string) => void
}

export const initialMoviesState: MoviesState = {
  movies: [],
  isLoading: false,
  error: 'Введите название фильма',
  isShort: false,
  query: ''
}

export const MoviesContext = createContext<{
  state: MoviesState
  actions: MoviesActions | null
}>({
  state: initialMoviesState,
  actions: null
})
