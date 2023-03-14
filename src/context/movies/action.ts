import { type Movie } from 'types/types'

export type MoviesActions = {
  setMovies: (movies: Movie[]) => void
  setLoading: (isLoading: boolean) => void
  setError: (message: string) => void
  setShort: (isShort: boolean) => void
  setQuery: (query: string) => void
  setIsSavedMovie: (isSaved: boolean, movieId: number) => void
}
