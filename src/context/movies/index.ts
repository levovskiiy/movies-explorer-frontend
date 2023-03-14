import { type MoviesActions } from './action'
import { MoviesContext } from './context'
import { type MoviesDispatchers, moviesReducer } from './reducer'
import { type MoviesState, initialMoviesState } from './state'

export {
  moviesReducer,
  type MoviesActions,
  MoviesContext,
  type MoviesDispatchers,
  type MoviesState,
  initialMoviesState
}
