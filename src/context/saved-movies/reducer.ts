import { type Movie } from '../../types/types'
import { type SavedMoviesState } from './state'

export type SavedMoviesDispatchers =
  { type: 'SAVE_MOVIE', payload: Movie }
  | { type: 'SAVE_MOVIES', payload: Movie[] }
  | { type: 'REMOVE_SAVED_MOVIE', payload: number }
  | { type: 'SET_ERROR', payload: string }
  | { type: 'SET_QUERY', payload: string }
  | { type: 'SET_SHORT', payload: boolean }
  | { type: 'SET_LOADING', payload: boolean }

export function savedMovieReducer(state: SavedMoviesState, action: SavedMoviesDispatchers) {
  const { type, payload } = action

  switch (type) {
    case 'SAVE_MOVIES':
      return { ...state, movies: payload }
    case 'SAVE_MOVIE':
      return { ...state, movies: [...state.movies, payload] }
    case 'REMOVE_SAVED_MOVIE':
      return { ...state, movies: state.movies.filter(movie => movie.movieId !== payload) }
    case 'SET_QUERY':
      return { ...state, query: payload }
    case 'SET_ERROR':
      return { ...state, error: payload }
    case 'SET_SHORT':
      return { ...state, short: payload }
    case 'SET_LOADING':
      return { ...state, isLoading: payload }
    default:
      return state
  }
}
