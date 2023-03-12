import { SavedMoviesContext } from 'context/saved-movies'
import { useContext } from 'react'
import { filterMovies, findMovies } from 'utils/utils'

export default function useSavedMovies(callback: () => any = () => []) {
  const context = useContext(SavedMoviesContext)

  if (!context) {
    throw new Error('Context SavedMovies не ялвяется дочерним для Context Provider')
  }

  const handlers = {
    getSavedMovies: async () => {
      context.actions?.setLoading(true)

      try {
        const savedMovies = await callback()
        context.actions?.saveMovies(savedMovies)
      } catch (error) {
        context.actions?.setError('Что-то произошло на сервере. Попробуйте перезагрузить страницу и сделать запрос снова.')
      } finally {
        context.actions?.setLoading(false)
      }
    },

    find: (query: string, isShort: boolean) => {
      try {
        const findedMovies = findMovies(context.state.movies, query)
        const result = filterMovies(findedMovies, isShort)
        context.actions?.saveMovies(result)
      } catch (error: any) {
        context.actions?.setError(error.message)
      }
    }
  }

  return {
    ...context,
    handlers
  }
}
