import { type Movie } from '../../types/types'
import { type MoviesState } from './context'

type MoviesActions =
  { type: 'SET_MOVIES', payload: Movie[] }
  | { type: 'SET_IS_LOADING', payload: boolean }
  | { type: 'SET_ERROR', payload: string }
  | { type: 'SET_QUERY', payload: string }
  | { type: 'SET_SHORT', payload: boolean }

export default function moviesReducer(state: MoviesState, action: MoviesActions) {
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
    default:
      return state
  }
}
