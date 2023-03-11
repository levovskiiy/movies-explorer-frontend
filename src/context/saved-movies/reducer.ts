import { type Movie } from '../../types/types'

type SavedMoviesState = Movie[]

type SavedMoviesActions = {
  type: 'SAVE_MOVIE'
  payload: Movie
} | {
  type: 'REMOVE_SAVED_MOVIE'
  payload: string
}

export default function savedMovieReducer(state: SavedMoviesState, action: SavedMoviesActions) {
  const { type, payload } = action

  switch (type) {
    case 'SAVE_MOVIE':
      return [...state, payload]
    case 'REMOVE_SAVED_MOVIE':
      return state.filter(movie => movie.id !== payload)
    default:
      return state
  }
}
