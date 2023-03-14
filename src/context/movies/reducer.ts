import { type Movie } from '../../types/types'
import { type MoviesState } from './state'

export type MoviesDispatchers =
  { type: 'SET_MOVIES', payload: Movie[] }
  | { type: 'SET_IS_LOADING', payload: boolean }
  | { type: 'SET_ERROR', payload: string }
  | { type: 'SET_QUERY', payload: string }
  | { type: 'SET_SHORT', payload: boolean }
  | { type: 'SET_IS_SAVED_MOVIE', payload: { isSaved: boolean, movieId: number } }

export function moviesReducer(state: MoviesState, action: MoviesDispatchers) {
  const { type, payload } = action

  switch (type) {
    case 'SET_MOVIES':
      return { ...state, movies: payload }
    case 'SET_IS_LOADING':
      return { ...state, isLoading: payload }
    case 'SET_ERROR':
      return { ...state, error: payload }
    case 'SET_QUERY':
      return { ...state, query: payload }
    case 'SET_SHORT':
      return { ...state, isShort: payload }
    case 'SET_IS_SAVED_MOVIE':
      return {
        ...state,
        movies: state.movies.map(movie => {
          return movie.movieId === payload.movieId
            ? { ...movie, isSaved: payload.isSaved }
            : movie
        }
        )
      }
    default:
      return state
  }
}
