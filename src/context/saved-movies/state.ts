import { type Movie } from 'types/types'

export type SavedMoviesState = {
  movies: Movie[]
  isLoading: boolean
  error: string
  query: string
  isShort: boolean
}

export const initialSavedMoviesState: SavedMoviesState = {
  movies: [],
  error: 'Ничего не найдено',
  query: '',
  isShort: false,
  isLoading: false
}
