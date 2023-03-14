import { createContext } from 'react'
import { initialSavedMoviesState, type SavedMoviesState } from './state'
import { type SavedMoviesAction } from './action'

export const SavedMoviesContext = createContext<{
  state: SavedMoviesState
  actions: SavedMoviesAction | null
}>({
  state: initialSavedMoviesState,
  actions: null
})
