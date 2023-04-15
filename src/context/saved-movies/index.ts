import { SavedMoviesContext } from './context'
import { type SavedMoviesAction } from './action'
import { type SavedMoviesDispatchers, savedMovieReducer } from './reducer'
import { type SavedMoviesState, initialSavedMoviesState } from './state'
import MoviesProvider from 'context/movies/provider'

export {
  type SavedMoviesAction,
  SavedMoviesContext,
  type SavedMoviesDispatchers,
  type SavedMoviesState,
  savedMovieReducer,
  initialSavedMoviesState,
  MoviesProvider
}
