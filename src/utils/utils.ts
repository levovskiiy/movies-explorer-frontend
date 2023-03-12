import { type Movie } from 'types/types'
import bem from './bem'

function findMovies(value: Movie[], query: string): Movie[] {
  console.log(query)
  return value.filter(v => v.nameRU.toLowerCase().includes(query.toLowerCase()))
}

function filterMovies(movies: Movie[], isShort: boolean): Movie[] {
  return isShort ? movies.filter(m => m.duration <= 40) : movies
}

function merge(...tokens: Array<string | undefined>): string {
  const result: string[] = []
  const classnames = tokens.join(' ').split(' ')
  const unique = new Set()

  for (const classname of classnames) {
    if (classname !== '' && !unique.has(classname)) {
      unique.add(classname)
      result.push(classname)
    }
  }

  return result.join(' ')
}

function formatDuration(duration: number): string {
  if (duration > 60) {
    return (duration / 60 | 0) + 'ч ' + duration % 60 + 'м'
  }

  if (duration === 60) {
    return (duration / 60) + 'ч'
  }

  return duration + 'м'
}

const classname = bem({
  modDelimeter: '_',
  elementDelimeter: '__'
})

export {
  classname,
  merge,
  formatDuration,
  findMovies,
  filterMovies
}
