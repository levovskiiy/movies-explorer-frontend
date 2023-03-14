import { type Movie } from 'types/types'

export type MoviesState = {
  movies: Movie[]
  isLoading: boolean
  error: string
  query: string
  isShort: boolean
}

export const initialMoviesState: MoviesState = {
  movies: [],
  isLoading: false,
  error: 'Введите название фильма',
  isShort: false,
  query: ''
}
