import { type Movie } from 'types/types'

export type SavedMoviesAction = {
  saveMovie: (movie: Movie) => void
  saveMovies: (movies: Movie[]) => void
  deleteMovie: (movieId: number) => void
  setError: (message: string) => void
  setQuery: (query: string) => void
  setShort: (isShort: boolean) => void
  setLoading: (isLoading: boolean) => void
  clear: () => void
}
