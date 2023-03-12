import { MoviesContext } from 'context/movies'
import { useContext } from 'react'
import BeatfilmService from 'utils/BeatfilmService'
import { filterMovies, findMovies } from 'utils/utils'

export default function useMovies() {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error('Context Movies не является дочерним для Context Provider')
  }

  const find = async (query: string, isShort: boolean) => {
    context.actions?.setLoading(true)
    try {
      const movies = await BeatfilmService.getMovies()
      const findedMovies = findMovies(movies, query)
      const result = filterMovies(findedMovies, isShort)

      if (result.length === 0) {
        context.actions?.setError('Ничего не найдено')
        context.actions?.setMovies([])
      } else {
        context.actions?.setError('')
        context.actions?.setMovies(result)
      }
    } catch (error: any) {
      context.actions?.setError('Что-то произошло на сервере. Попробуйте перезагрузить страницу и сделать запрос снова.')
    } finally {
      context.actions?.setLoading(false)
    }
  }

  return {
    ...context,
    handlers: {
      find
    }
  }
}
