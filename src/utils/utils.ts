import { type Movie } from 'types/types'
import bem from './bem'
import validator from 'validator'
import { SHORT_DURATION, VALIDATION_ERROR_MESSAGE } from './constants'

function findMovies(value: Movie[], query: string): Movie[] {
  return value.filter(v => {
    return v.nameRU.toLowerCase().includes(query.toLowerCase())
  })
}

function filterMovies(movies: Movie[], isShort: boolean): Movie[] {
  return isShort ? movies.filter(m => m.duration <= SHORT_DURATION) : movies
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

const emailValidator = (email: string): string => {
  if (email.length === 0) {
    return VALIDATION_ERROR_MESSAGE.email.REQUIRED
  }

  if (!validator.isEmail(email)) {
    return VALIDATION_ERROR_MESSAGE.email.INCORRECT_FORMAT
  }

  return ''
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
  filterMovies,
  emailValidator
}
